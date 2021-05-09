var gulp = require('gulp');
var yargs = require('yargs');
var build = require('./build');
var func = require('./helpers');
var rename = require('gulp-rename');
var rtlcss = require('gulp-rtlcss');
var glob = require('glob');
var fs = require('fs');
var sass = require('gulp-dart-sass');
var merge = require('merge-stream');

if (Object.keys(build).length === 0) {
  return;
}

// merge with default parameters
var args = Object.assign({
  prod: false,
  rtl: '',
  exclude: '',
  theme: '',
  path: '',
  angular: false,
  react: false,
  vue: false,
  suffix: false,
}, yargs.argv);

var demo = func.getDemo();

// set dist to demo folder
var dist = [];
build.config.dist.forEach(function(d) {
  dist.push(d.replace('{demo}', demo));
});
build.config.dist = dist;

var path = {};
for (var key in build.config.path) {
  if (!build.config.path.hasOwnProperty(key)) {
    continue;
  }
  path[key] = build.config.path[key].replace('{demo}', demo);
}
build.config.path = path;

if (args.prod !== false) {
  // force disable debug for production
  build.config.debug = false;
  build.config.compile = Object.assign(build.config.compile, {
    'jsMinify': true,
    'cssMinify': true,
    'jsSourcemaps': false,
    'cssSourcemaps': false,
  });
}

if (args.rtl !== '') {
  build.config.compile.rtl.enabled = (args.rtl === 'true');
}

var skipRtl = build.config.compile.rtl.skip;

gulp.task('rtl', function(cb) {
  var streams = [];
  var stream = null;
  func.objectWalkRecursive(build.build, function(val, key, userdata) {
    if (userdata.indexOf(key) === -1 && typeof val.styles !== 'undefined' && key !== 'bundle') {
      // rtl conversion in each plugins
      for (var i in val.styles) {
        if (!val.styles.hasOwnProperty(i)) {
          continue;
        }
        var toRtlFile = func.dotPath(val.styles[i]);

        // exclude scss file for now
        if (toRtlFile.indexOf('.scss') === -1 && !(/\*/).test(toRtlFile)) {
          stream = gulp.src(toRtlFile, {allowEmpty: true}).pipe(rtlcss()).pipe(rename({suffix: args.suffix ? '.min.rtl' : '.rtl'})).pipe(gulp.dest(func.pathOnly(toRtlFile)));
          streams.push(stream);

          // convert rtl for minified
          if (!(/\.min\./i).test(toRtlFile)) {
            stream = gulp.src(toRtlFile, {allowEmpty: true}).
                pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError)).
                pipe(rename({suffix: args.suffix ? '.min.rtl' : '.rtl'})).
                pipe(gulp.dest(func.pathOnly(toRtlFile)));
            streams.push(stream);
          }
        }
      }
    }
  }, skipRtl);
  cb();
  return merge(streams);
});

// task to bundle js/css
gulp.task('build-bundle', function(cb) {
  func.objectWalkRecursive(build.build, function(val, key) {
    if (val.hasOwnProperty('src')) {
      if (val.hasOwnProperty('bundle')) {
        func.bundle(val);
      }
      if (val.hasOwnProperty('output')) {
        func.output(val);
      }
    }
  });
  cb();
});

var tasks = [];

// don't clean assets if compile only 1 type
if (!args.sass && !args.js && !args.media) {
  tasks.push('clean');
}

if (build.config.compile.rtl.enabled) {
  tasks.push('rtl');
}
tasks.push('build-bundle');

// entry point
gulp.task('default', gulp.series(tasks));

// build default and copy demo from src to dist folder
var buildTasks = [];
if (build.config.compile.rtl.enabled) {
  buildTasks.push('rtl');
}
buildTasks.push('build-bundle');
gulp.task('build', gulp.series(buildTasks));
