import gulp from "gulp";
import connect from "gulp-connect";
import { build } from "./build.js";
import { buildBundleTask } from "./compile.js";
import { getDemo } from "./helpers.js";

// localhost site
const localHostTask = (cb) => {
  var demo = getDemo();
  if(demo) {
    demo += '/';
  }
  connect.server({
    root: "../"+demo,
    livereload: true,
  });
  cb();
};

const reloadTask = (cb) => {
  connect.reload();
  cb();
};

const watchTask = () => {
  return gulp.watch(
    [build.config.path.src + "/**/*.js", build.config.path.src + "/**/*.scss"],
    gulp.series(buildBundleTask)
  );
};

const watchSCSSTask = () => {
  return gulp.watch(
    build.config.path.src + "/**/*.scss",
    gulp.parallel(buildBundleTask)
  );
};

const watchJSTask = () => {
  return gulp.watch(
    build.config.path.src + "/**/*.js",
    gulp.parallel(buildBundleTask)
  );
};


// Exports
export {
  localHostTask,
  reloadTask, watchTask, watchSCSSTask, watchJSTask
};
