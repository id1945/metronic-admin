import gulp from "gulp";
import rename from "gulp-rename";
import rtlcss from "gulp-rtlcss";
import sass from "gulp-dart-sass";
import merge from "merge-stream";
import _ from "lodash";
import { build as buildMaster } from "./build.js";
import { argv, getDemo, getTheme, objectWalkRecursive, dotPath, pathOnly, outputFunc, bundle } from "./helpers.js";
import { cleanTask } from "./clean.js";
import fs from "fs";
import * as pathDir from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = pathDir.dirname(__filename);

// merge with default parameters
const args = Object.assign(
  {
    prod: false,
    sourcemap: false,
    rtl: "",
    exclude: "",
    theme: "",
    path: "",
    angular: false,
    react: false,
    vue: false,
    suffix: false,
  },
  argv
);

var build = buildMaster;
const demo = getDemo();

let theme = '';

// merge gulp.config.json in release version
if (fs.existsSync(`${__dirname}/../gulp.config.json`)) {
  var c = fs.readFileSync(`${__dirname}/../gulp.config.json`, 'utf8');
  build = _.merge(build, JSON.parse(c));
} else {
  // set theme
  theme = getTheme();

  // merge config for theme which have demo levels
  const themeConfPath = `./../../../../themes/${theme}/html/tools/gulp.config.json`;
  if (fs.existsSync(`${__dirname}/${themeConfPath}`)) {
    var c = fs.readFileSync(`${__dirname}/${themeConfPath}`, 'utf8');
    build = _.merge(build, JSON.parse(c));
  }
}

// set dist to demo folder
const dist = [];
build.config.dist.forEach((d) => {
  dist.push(d.replace("{demo}", demo).replace("{theme}", theme));
});
build.config.dist = dist;

const path = {};
for (let key in build.config.path) {
  if (!build.config.path.hasOwnProperty(key)) {
    continue;
  }
  path[key] = build.config.path[key]
    .replace("{demo}", demo)
    .replace("{theme}", theme);
}
build.config.path = path;

if (args.prod !== false) {
  // force disable debug for production
  build.config.debug = false;
  // force assets minification for production
  build.config.compile.jsMinify = true;
  build.config.compile.cssMinify = true;
}

if (args.sourcemap !== false) {
  // force assets sourcemap
  // build.config.compile.jsSourcemaps = true;
  // build.config.compile.cssSourcemaps = true;
}

if (args.rtl) {
  build.config.compile.rtl.enabled = true;
}

const rtlTask = (cb) => {
  const streams = [];
  let stream = null;
  objectWalkRecursive(
    build.build,
    (val, key, userdata) => {
      if (val.hasOwnProperty("src") && val.hasOwnProperty("dist")) {
        if (["custom", "media", "api", "misc"].indexOf(key) !== -1) {
          if (userdata.indexOf(key) === -1 && typeof val.styles !== "undefined") {
            // rtl conversion in each plugins
            for (let i in val.styles) {
              if (!val.styles.hasOwnProperty(i)) {
                continue;
              }

              const toRtlFile = dotPath(val.styles[i]);
              // exclude scss file for now
              if (toRtlFile.indexOf(".scss") === -1 && !/\*/.test(toRtlFile)) {
                stream = gulp.src(toRtlFile, { allowEmpty: true })
                  .pipe(rtlcss())
                  .pipe(rename({ suffix: ".rtl" }))
                  .pipe(gulp.dest(pathOnly(toRtlFile)));
                streams.push(stream);

                // convert rtl for minified
                if (!/\.min\./i.test(toRtlFile)) {
                  stream = gulp.src(toRtlFile, { allowEmpty: true })
                    .pipe(
                      sass({ outputStyle: "compressed" }).on("error", sass.logError)
                    )
                    .pipe(rename({ suffix: args.suffix ? ".min.rtl" : ".rtl" }))
                    .pipe(gulp.dest(pathOnly(toRtlFile)));
                  streams.push(stream);
                }
              }
            }
          }
        }
      }
    },
    build.config.compile.rtl.skip
  );
  cb();
  return merge(streams);
};

// task to bundle js/css
const buildBundleTask = (cb) => {
  objectWalkRecursive(build.build, function (val, key) {
    if (val.hasOwnProperty("src") && val.hasOwnProperty("dist")) {
      if (["custom", "media", "api", "misc"].indexOf(key) !== -1) {
        outputFunc(val);
      } else {
        bundle(val);
      }
    }
  });
  cb();
};

const tasks = [];

// don't clean assets if compile only 1 type
if (!args.sass && !args.js && !args.media) {
  tasks.push(cleanTask);
}

if (
  typeof build.config.compile.rtl !== "undefined" &&
  build.config.compile.rtl.enabled
) {
  tasks.push(rtlTask);
}
tasks.push(buildBundleTask);

// entry point
const compileTask = gulp.series(buildBundleTask);

// build default and copy demo from src to dist folder
const buildTasks = [];
buildTasks.push(buildBundleTask);
const buildTask = gulp.series(...buildTasks);

// Exports
export { 
  rtlTask, 
  buildBundleTask, 
  compileTask,
  buildTask
};
