var gulp = require('gulp');
var pretty = require('pretty');
var yargs = require('yargs');
var fs = require('fs');
var glob = require('glob');

// merge with default parameters
var args = Object.assign({
  path: '',
}, yargs.argv);

gulp.task('html-formatter', function(cb) {
  var dir = args.path;
  if (dir === '') {
    console.log('The option --path is required');
    cb();
    return;
  }
  glob(dir + '/**/*.html',
      // ignore assets folder
      {ignore: [dir + '/assets/**']},
      function(er, files) {
        files.forEach(function(path) {
          fs.readFile(path, {encoding: 'UTF-8'}, function(err, data) {
            if (err) {
              throw err;
            }
            var formatted = pretty(data, {
              ocd: true,
              indent_size: 1,
              indent_char: '\t',
              unformatted: ['code', 'pre', 'em', 'strong'],
            });
            fs.writeFile(path, formatted, function(err) {
              if (err) {
                throw err;
              }
              console.log(path + ' formatted!');
            });
          });
        });
      });
  cb();
});
