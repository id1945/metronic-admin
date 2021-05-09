'use strict';

var gulp = require('gulp');
var sass = require('gulp-dart-sass');
var rename = require('gulp-rename');
var rewrite = require('gulp-rewrite-css');
var concat = require('gulp-concat');
var lazypipe = require('lazypipe');
var gulpif = require('gulp-if');
var terser = require('gulp-terser');
var sourcemaps = require('gulp-sourcemaps');
var build = require('./build');
var path = require('path');
var fs = require('fs');
var autoprefixer = require('gulp-autoprefixer');
var rtlcss = require('gulp-rtlcss');
var cleancss = require('gulp-clean-css');
var yargs = require('yargs');

// merge with default parameters
var args = Object.assign({
    prod: false,
    sass: false,
    js: false,
    media: false,
}, yargs.argv);

var allAssets = false;
if (args.sass === false && args.js === false && args.media === false) {
    allAssets = true;
}

if (args.prod !== false) {
    // force disable debug for production
    build.config.debug = false;
    build.config.compile.jsMinify = true;
    build.config.compile.cssMinify = true;
}

module.exports = {

    // default variable config
    config: Object.assign({}, {
        demo: '',
        debug: true,
        compile: {
            jsMinify: false,
            cssMinify: false,
            jsSourcemaps: false,
            cssSourcemaps: false,
        },
    }, build.config),

    /**
     * Walk into object recursively
     * @param array
     * @param funcname
     * @param userdata
     * @returns {boolean}
     */
    objectWalkRecursive: function (array, funcname, userdata) {
        if (!array || typeof array !== 'object') {
            return false;
        }
        if (typeof funcname !== 'function') {
            return false;
        }
        for (var key in array) {
            // apply "funcname" recursively only on object
            if (Object.prototype.toString.call(array[key]) === '[object Object]') {
                var funcArgs = [array[key], funcname];
                if (arguments.length > 2) {
                    funcArgs.push(userdata);
                }
                if (module.exports.objectWalkRecursive.apply(null, funcArgs) === false) {
                    return false;
                }
                // continue
            }
            try {
                if (arguments.length > 2) {
                    funcname(array[key], key, userdata);
                } else {
                    funcname(array[key], key);
                }
            } catch (e) {
                return false;
            }
        }
        return true;
    },

    /**
     * Add JS compilation options to gulp pipe
     */
    jsChannel: function () {
        var config = this.config.compile;
        return lazypipe().pipe(function () {
            return gulpif(config.jsSourcemaps, sourcemaps.init({loadMaps: true, debug: config.debug}));
        }).pipe(function () {
            return gulpif(config.jsMinify, terser());
        }).pipe(function () {
            return gulpif(config.jsSourcemaps, sourcemaps.write('./'));
        });
    },

    /**
     * Add CSS compilation options to gulp pipe
     */
    cssChannel: function (rtl, includePaths) {
        var config = this.config.compile;
        return lazypipe().pipe(function () {
            return gulpif(config.cssSourcemaps, sourcemaps.init({loadMaps: true, debug: config.debug}));
        }).pipe(function () {
            return sass({
                errLogToConsole: true,
                includePaths: [build.config.path.src + '/sass', 'node_modules'].concat(includePaths),
                // outputStyle: config.cssMinify ? 'compressed' : '',
            }).on('error', sass.logError);
        }).pipe(function () {
            // convert rtl for style.bundle.css only here, others already converted before
            return gulpif(rtl, rtlcss());
        }).pipe(function () {
            return gulpif(config.cssMinify, cleancss());
        }).pipe(function () {
            return gulpif(true, autoprefixer({
                overrideBrowserslist: ['last 2 versions'],
                cascade: false,
            }));
        }).pipe(function () {
            return gulpif(config.cssSourcemaps, sourcemaps.write('./'));
        });
    },

    /**
     * Multiple output paths by output config
     * @param path
     * @param outputFile
     * @param type
     * @returns {*}
     */
    outputChannel: function (path, outputFile, type) {
        if (!allAssets) {
            if (args.sass && ['styles', 'styles-by-demo'].indexOf(type) === -1) {
                return lazypipe().pipe(function () {
                    // noop
                });
            }
            if (args.js && ['scripts'].indexOf(type) === -1) {
                return lazypipe().pipe(function () {
                    // noop
                });
            }
            if (args.media && ['media', 'fonts', 'images'].indexOf(type) === -1) {
                return lazypipe().pipe(function () {
                    // noop
                });
            }
        }

        if (typeof path === 'undefined') {
            console.log('Output path not defined');
        }
        if (typeof outputFile === 'undefined') {
            outputFile = '';
        }

        var piping = lazypipe();

        if (type === 'styles') {
            piping = piping.pipe(function () {
                return gulpif(build.config.compile.cssMinify, rename({suffix: args.suffix ? '.min' : ''}));
            });
        }
        if (type === 'scripts') {
            piping = piping.pipe(function () {
                return gulpif(build.config.compile.jsMinify, rename({suffix: args.suffix ? '.min' : ''}));
            });
        }

        var regex = new RegExp(/\{\$.*?\}/);
        var matched = path.match(regex);
        if (matched) {
            var outputs = build.config.dist;
            outputs.forEach(function (output) {
                var outputPath = path.replace(matched[0], output).replace(outputFile, '');
                (function (_output) {
                    piping = piping.pipe(function () {
                        return gulp.dest(_output);
                    });
                })(outputPath);
            });
        }

        return piping;
    },

    /**
     * Convert string path to actual path
     * @param path
     * @returns {*}
     */
    dotPath: function (path) {
        var regex = new RegExp(/\{\$(.*?)\}/),
            dot = function (obj, i) {
                return obj[i];
            };
        var matched = path.match(regex);
        if (matched) {
            var realpath = matched[1].split('.').reduce(dot, build);
            return path = path.replace(matched[0], realpath);
        }

        return path;
    },

    /**
     * Convert multiple paths
     * @param paths
     */
    dotPaths: function (paths) {
        paths.forEach(function (path, i) {
            paths[i] = module.exports.dotPath(path);
        });
    },

    /**
     * Css path rewriter when bundle files moved
     * @param bundle
     */
    cssRewriter: function (bundle) {
        var imgRegex = new RegExp(/\.(gif|jpg|jpeg|tiff|png|ico|svg)$/i);
        var config = this.config;

        return lazypipe().pipe(function () {
            // rewrite css relative path
            return rewrite({
                destination: bundle['styles'],
                debug: config.debug,
                adaptPath: function (ctx) {

                    var isCss = ctx.sourceFile.match(/\.[css]+$/i);
                    // process css only
                    if (isCss[0] === '.css') {

                        if (/plugins\.bundle/.test(bundle['styles'])) {
                            var pieces = ctx.sourceDir.split(/\\|\//);
                            // only vendors/base pass this
                            var vendor = pieces[pieces.indexOf('node_modules') + 1];
                            if (pieces.indexOf('node_modules') === -1) {
                                vendor = pieces[pieces.indexOf('plugins') + 1];
                            }
                            var extension = 'fonts/';
                            if (imgRegex.test(ctx.targetFile)) {
                                extension = 'images/';
                            }

                            return path.join(extension, vendor, path.basename(ctx.targetFile));
                        }

                        return ctx.targetFile.replace(/\.?\.\//, '');
                    }
                },
            });
        });
    },

    /**
     * Get end filename from path
     * @param path
     * @returns {string}
     */
    baseFileName: function (path) {
        var maybeFile = path.split('/').pop();
        if (maybeFile.indexOf('.') !== -1) {
            return maybeFile;
        }
        return '';
    },

    baseName: function (str) {
        var base = new String(str).substring(str.lastIndexOf('/') + 1);
        if (base.lastIndexOf('.') != -1) {
            base = base.substring(0, base.lastIndexOf('.'));
        }
        return base;
    },

    /**
     * Remove file name and get the path
     */
    pathOnly: function (str) {
        var array = str.split('/');
        if (array.length > 0) {
            array.pop();
        }
        return array.join('/');
    },

    /**
     * Bundle
     * @param bundle
     */
    bundle: function (bundle) {
        var _self = this;
        var streams = [];
        var stream;

        if (bundle.hasOwnProperty('src') && bundle.hasOwnProperty('bundle')) {

            // for images & fonts as per vendor
            if ('mandatory' in bundle.src && 'optional' in bundle.src) {
                var vendors = {};

                for (var key in bundle.src) {
                    if (!bundle.src.hasOwnProperty(key)) {
                        continue;
                    }
                    vendors = Object.assign(vendors, bundle.src[key]);
                }

                for (var vendor in vendors) {
                    if (!vendors.hasOwnProperty(vendor)) {
                        continue;
                    }

                    var vendorObj = vendors[vendor];

                    for (var type in vendorObj) {
                        if (!vendorObj.hasOwnProperty(type)) {
                            continue;
                        }

                        _self.dotPaths(vendorObj[type]);

                        switch (type) {
                            case 'fonts':
                                stream = gulp.src(vendorObj[type], {allowEmpty: true});
                                var output = _self.outputChannel(bundle.bundle[type] + '/' + vendor, undefined, type)();
                                if (output) {
                                    stream.pipe(output);
                                }
                                streams.push(stream);
                                break;
                            case 'images':
                                stream = gulp.src(vendorObj[type], {allowEmpty: true});
                                var output = _self.outputChannel(bundle.bundle[type] + '/' + vendor, undefined, type)();
                                if (output) {
                                    stream.pipe(output);
                                }
                                streams.push(stream);
                                break;
                        }
                    }
                }
            }

            // flattening array
            if (!('styles' in bundle.src) && !('scripts' in bundle.src)) {
                var src = {styles: [], scripts: []};
                _self.objectWalkRecursive(bundle.src, function (paths, type) {
                    switch (type) {
                        case 'styles':
                        case 'scripts':
                            src[type] = src[type].concat(paths);
                            break;
                        case 'images':
                            // images for mandatory and optional vendor already processed
                            if (!'mandatory' in bundle.src || !'optional' in bundle.src) {
                                src[type] = src[type].concat(paths);
                            }
                            break;
                    }
                });
                bundle.src = src;
            }

            for (var type in bundle.src) {
                if (!bundle.src.hasOwnProperty(type)) {
                    continue;
                }
                // skip if not array
                if (Object.prototype.toString.call(bundle.src[type]) !== '[object Array]') {
                    continue;
                }
                // skip if no bundle output is provided
                if (typeof bundle.bundle[type] === 'undefined') {
                    continue;
                }

                _self.dotPaths(bundle.src[type]);
                var outputFile = _self.baseFileName(bundle.bundle[type]);

                switch (type) {
                    case 'styles':
                        if (bundle.bundle.hasOwnProperty(type)) {
                            // rtl css bundle
                            if (build.config.compile.rtl.enabled) {
                                var toRtlFiles = [];
                                var rtlFiles = [];
                                bundle.src[type].forEach(function (path) {
                                    toRtlFiles = toRtlFiles.concat(path);
                                });

                                var shouldRtl = false;
                                if (_self.baseName(bundle.bundle[type]) === 'style.bundle') {
                                    shouldRtl = true;
                                }
                                var rtlOutput = _self.pathOnly(bundle.bundle[type]) + '/' + _self.baseName(bundle.bundle[type]) + '.rtl.css';
                                stream = gulp.src(toRtlFiles, {allowEmpty: true}).pipe(_self.cssRewriter(bundle.bundle)()).pipe(concat(_self.baseName(bundle.bundle[type]) + '.rtl.css')).pipe(_self.cssChannel(shouldRtl)());
                                var output = _self.outputChannel(rtlOutput, _self.baseName(bundle.bundle[type]) + '.rtl.css', type)();
                                if (output) {
                                    stream.pipe(output);
                                }
                                streams.push(stream);
                            }

                            // default css bundle
                            stream = gulp.src(bundle.src[type], {allowEmpty: true}).pipe(_self.cssRewriter(bundle.bundle)()).pipe(concat(outputFile)).pipe(_self.cssChannel()());
                            var output = _self.outputChannel(bundle.bundle[type], outputFile, type)();
                            if (output) {
                                stream.pipe(output);
                            }
                            streams.push(stream);
                        }
                        break;

                    case 'scripts':
                        if (bundle.bundle.hasOwnProperty(type)) {
                            stream = gulp.src(bundle.src[type], {allowEmpty: true}).pipe(concat(outputFile)).pipe(_self.jsChannel()());
                            var output = _self.outputChannel(bundle.bundle[type], outputFile, type)();
                            if (output) {
                                stream.pipe(output);
                            }
                            streams.push(stream);
                        }

                        break;

                    case 'images':
                        if (bundle.bundle.hasOwnProperty(type)) {
                            stream = gulp.src(bundle.src[type], {allowEmpty: true});
                            var output = _self.outputChannel(bundle.bundle[type], undefined, type)();
                            if (output) {
                                stream.pipe(output);
                            }
                            streams.push(stream);
                        }
                        break;
                }
            }
        }

        return streams;
    },

    /**
     * Copy source to output destination
     * @param bundle
     */
    output: function (bundle) {
        var _self = this;
        var stream;
        var streams = [];

        if (bundle.hasOwnProperty('src') && bundle.hasOwnProperty('output')) {
            for (var type in bundle.src) {
                if (!bundle.src.hasOwnProperty(type)) {
                    continue;
                }

                _self.dotPaths(bundle.src[type]);

                if (bundle.output.hasOwnProperty(type)) {
                    switch (type) {
                        case 'styles':
                            // non rtl styles
                            stream = gulp.src(bundle.src[type], {allowEmpty: true}).pipe(_self.cssChannel()());
                            var output = _self.outputChannel(bundle.output[type], undefined, type)();
                            if (output) {
                                stream.pipe(output);
                            }
                            streams.push(stream);

                            // rtl styles for scss
                            var shouldRtl = false;
                            if (build.config.compile.rtl.enabled) {
                                bundle.src[type].forEach(function (output) {
                                    if (output.indexOf('.scss') !== -1) {
                                        return shouldRtl = true;
                                    }
                                });
                                stream = gulp.src(bundle.src[type], {allowEmpty: true}).pipe(_self.cssChannel(shouldRtl)()).pipe(rename({suffix: '.rtl'}));
                                var output = _self.outputChannel(bundle.output[type], undefined, type)();
                                if (output) {
                                    stream.pipe(output);
                                }
                                streams.push(stream);
                            }
                            break;
                        case 'scripts':
                            stream = gulp.src(bundle.src[type], {allowEmpty: true}).pipe(_self.jsChannel()());
                            var output = _self.outputChannel(bundle.output[type], undefined, type)();
                            if (output) {
                                stream.pipe(output);
                            }
                            streams.push(stream);
                            break;
                        default:
                            stream = gulp.src(bundle.src[type], {allowEmpty: true});
                            var output = _self.outputChannel(bundle.output[type], undefined, type)();
                            if (output) {
                                stream.pipe(output);
                            }
                            streams.push(stream);
                            break;
                    }
                }
            }
        }

        return streams;
    },

    getDemos: function () {
        var demos = Object.keys(build.build.demos);
        console.log(demos);
        // build by demo, leave demo empty to generate all demos
        if (typeof build.config.demo !== 'undefined' && build.config.demo !== '') {
            demos = build.config.demo.split(',').map(function (item) {
                return item.trim();
            });
        }
        return demos;
    },

    getFolders: function (dir) {
        return fs.readdirSync(dir).filter(function (file) {
            return fs.statSync(path.join(dir, file)).isDirectory();
        });
    },

    getParameters: function() {
        console.log(process.env);
        // remove first 2 unused elements from array
        let argv = JSON.parse(process.env.npm_config_argv).cooked.slice(2);
        argv = argv.map((arg) => {
            return arg.replace(/--/i, '');
        });
        return argv;
    },

    getDemo: function() {
        // get demo from parameters
        var demo = Object.keys(yargs.argv).join(' ').match(/(demo\d+)/ig) || 'demo1';
        if (typeof demo === 'object') {
            demo = demo[0];
        }
        return demo;
    }
};
