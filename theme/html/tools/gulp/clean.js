var gulp = require('gulp');
var del = require('del');
var build = require('./build');
var func = require('./helpers');

// task to clean and delete dist directory content
var getPaths = function(outPaths) {
	if (typeof outPaths === 'undefined') outPaths = [];
	var paths = [];
	var outputs = build.config.dist;
	outputs.forEach(function(output) {
		paths.push(output.replace('{demo}', func.getDemo()));
	});

	var realpaths = [];
	paths.forEach(function(path) {
		realpaths.push(path + '/*');
	});

	return realpaths;
};

gulp.task('clean', function() {
	return del(getPaths(), {force: true});
});
