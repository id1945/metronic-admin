var yargs = require('yargs');
var fs = require('fs');
var colors = require('colors');
var gulp = require('gulp');
var rename = require('gulp-rename');
var concat = require('gulp-concat');

// merge with default parameters
var args = Object.assign({
    prod: false,
    rtl: '',
    exclude: '',
    theme: '',
    demo: '',
    path: '',
    angular: false,
    react: false,
    vue: false,
}, yargs.argv);

var confPath = './../gulp.config.json';

module.exports = {};
if (fs.existsSync(__dirname + '/' + confPath)) {
    var d = new Date();
    var t = d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds();
    console.log('[' + t.grey + ']' + ' ' + 'Using config ' + confPath.green);
    module.exports = require(confPath);
}
