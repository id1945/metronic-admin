const webpack = require('webpack');
const path = require('path');
const fs = require('fs');
const del = require('del');
const glob = require('glob');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserJSPlugin = require('terser-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const WebpackMessages = require('webpack-messages');
const ExcludeAssetsPlugin = require('webpack-exclude-assets-plugin');
const MergeIntoSingle = require('webpack-merge-and-include-globally/index');
const RtlCssPlugin = require('rtlcss-webpack-plugin');

const dev = false;

// paths
let rootPath = path.resolve(__dirname, '..');
const corePath = rootPath;
const coreSrcPath = corePath + '/src';

// arguments/params from the line command
const args = getParameters();

// get theme name
let theme = getTheme(args);

if (dev) {
    rootPath = path.resolve(__dirname, '../../../themes/' + theme + '/html');
}

// get selected demo
let demo = getDemos(rootPath)[0];

// under demo paths
const demoPath = rootPath + (demo ? '/' + demo : '');
const distPath = demoPath + '/dist';
const assetDistPath = distPath + '/assets';
const srcPath = demoPath + '/src';

const extraPlugins = [];
const exclude = [];

const js = args.indexOf('js') !== -1;
const css = args.indexOf('css') !== -1 || args.indexOf('scss') !== -1;
const darkMode = args.indexOf('dark_mode') !== -1;

removeExistingAssets();

additionalSettings();

importExtraPlugins();

function additionalSettings() {
    if (args.indexOf('rtl') !== -1) {
        // enable rtl for css
        extraPlugins.push(new RtlCssPlugin({
            filename: '[name].rtl.css',
        }));
    }

    if (!js && css) {
        // exclude js files
        exclude.push('\.js$');
    }

    if (js && !css) {
        // exclude css files
        exclude.push('\.s?css$');
    }

    if (exclude.length) {
        // add plugin for exclude assets (js/css)
        extraPlugins.push(new ExcludeAssetsPlugin({
            path: exclude,
        }));
    }
}

function getEntryFiles() {

    const entries = {
        // 3rd party plugins css/js
        'plugins/global/plugins.bundle': ['./webpack/plugins/plugins.js', './webpack/plugins/plugins.scss'],
        // Theme css/js
        'css/style.bundle': ['./' + path.relative('./', srcPath) + '/sass/style.scss', './' + path.relative('./', srcPath) + '/sass/plugins.scss'],
        'js/scripts.bundle': './webpack/scripts' + (demo ? '.' + demo : '') + '.js',
    };

    if (darkMode) {
        entries['plugins/global/plugins.dark.bundle'] = ['./webpack/plugins/plugins.js', './webpack/plugins/plugins.scss'];
        entries['css/style.dark.bundle'] = ['./' + path.relative('./', srcPath) + '/sass/style.dark.scss', './' + path.relative('./', srcPath) + '/sass/plugins.dark.scss'];
    }

    // Custom 3rd party plugins
    (glob.sync('./webpack/{plugins,js}/custom/**/*.+(js)') || []).forEach(file => {
        let loc = file.replace('webpack/', '').replace('./', '');
        loc = loc.replace('.js', '.bundle');
        entries[loc] = file;
    });

    // Custom JS files from src folder
    (glob.sync(path.relative('./', srcPath) + '/js/custom/**/!(_)*.js') || [])
        .filter(f => {
            // exclude folder with bundle
            return /\/bundle\/.*?\.js/.test(f) === false;
        })
        .forEach(file => {
            entries[file.replace(/.*js\/(.*?)\.js$/ig, 'js/$1')] = './' + file;
        });

    if (dev) {
        entries['js/scripts.bundle'] = './' + path.relative('./', rootPath) + '/tools/webpack/scripts' + (demo ? '.' + demo : '') + '.js';

        // Custom 3rd party plugins from theme folder
        (glob.sync('./' + path.relative('./', rootPath) + '/tools/webpack/{plugins,js}/custom/**/*.+(js)') || []).forEach(file => {
            let loc = file.replace(/^.*?webpack/g, '').replace('./', '');
            loc = loc.replace('.js', '.bundle');
            entries[loc] = file;
        });

        // Custom JS files from core src folder
        (glob.sync(path.relative('./', coreSrcPath) + '/js/custom/**/!(_)*.js') || []).forEach(file => {
            entries[file.replace(/.*js\/(.*?)\.js$/ig, 'js/$1')] = './' + file;
        });
    }

    return entries;
}

function mainConfig() {
    return {
        // enabled/disable optimizations
        mode: args.indexOf('production') !== -1 ? 'production' : 'development',
        // console logs output, https://webpack.js.org/configuration/stats/
        stats: 'errors-warnings',
        ignoreWarnings: [{
            module: /esri-leaflet/,
            message: /version/,
        }],
        performance: {
            // disable warnings hint
            hints: false,
        },
        optimization: {
            minimize: args.indexOf('production') !== -1,
            // js and css minimizer
            minimizer: [new TerserJSPlugin(), new CssMinimizerPlugin()],
        },
        entry: getEntryFiles(),
        output: {
            // main output path in assets folder
            path: assetDistPath,
            // output path based on the entries' filename
            filename: '[name].js',
        },
        resolve: {
            alias: {
                jquery: path.join(__dirname, 'node_modules/jquery/src/jquery'),
                $: path.join(__dirname, 'node_modules/jquery/src/jquery'),
                '@': [demoPath, corePath],
                'handlebars': 'handlebars/dist/handlebars.js',
            },
            extensions: ['.js', '.scss'],
            fallback: {
                util: false,
            },
        },
        devtool: 'source-map',
        plugins: [
            new WebpackMessages({
                name: theme,
                logger: str => console.log(`>> ${str}`),
            }),
            // create css file
            new MiniCssExtractPlugin({
                filename: '[name].css',
            }),
            new CopyWebpackPlugin({
                patterns: copyFolders(),
            }),
        ].concat(extraPlugins),
        module: {
            rules: [
                {
                    test: /\.css$/,
                    use: [
                        MiniCssExtractPlugin.loader,
                        'css-loader',
                    ],
                },
                {
                    test: /\.scss$/,
                    use: [
                        MiniCssExtractPlugin.loader,
                        {
                            loader: 'css-loader',
                            // options: {
                            //   url: (url, resourcePath) => {
                            //     // Don't handle local urls
                            //     return !!url.includes('media');
                            //   },
                            // },
                        },
                        /*{
                            loader: 'postcss-loader', // Run post css actions
                            options: {
                                postcssOptions: {
                                    plugins: function () { // post css plugins, can be exported to postcss.config.js
                                        return [
                                            // require('precss'),
                                            require('autoprefixer'),
                                        ];
                                    },
                                }
                            },
                        },*/
                        {
                            loader: 'sass-loader',
                            options: {
                                // Prefer `dart-sass`
                                implementation: require("sass"),
                                sourceMap: false,
                                sassOptions: {
                                    includePaths: [
                                        demoPath,
                                        path.resolve(__dirname, 'node_modules'),
                                    ],
                                },
                            },
                        },
                    ],
                },
                {
                    test: /\.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
                    include: [
                        path.resolve(__dirname, 'node_modules'),
                        rootPath,
                    ],
                    use: [
                        {
                            loader: 'file-loader',
                            options: {
                                // prevent name become hash
                                name: '[name].[ext]',
                                // move files
                                outputPath: 'plugins/global/fonts',
                                // rewrite path in css
                                publicPath: 'fonts',
                                esModule: false,
                            },
                        },
                    ],
                },
                {
                    test: /\.(gif|png|jpe?g)$/,
                    include: [
                        path.resolve(__dirname, 'node_modules'),
                    ],
                    use: [
                        {
                            loader: 'file-loader',
                            options: {
                                // emitFile: false,
                                name: '[path][name].[ext]',
                                publicPath: (url, resourcePath, context) => {
                                    return path.basename(url);
                                },
                                outputPath: (url, resourcePath, context) => {
                                    var plugin = url.match(/node_modules\/(.*?)\//i);
                                    if (plugin) {
                                        return `plugins/custom/${plugin[1]}/${path.basename(url)}`;
                                    }
                                    return url;
                                },
                            },
                        },
                    ],
                },
                {
                    // for demo8 image in scss
                    test: /\.(gif|png|jpe?g)$/,
                    use: [
                        {
                            loader: 'url-loader',
                            options: {
                                emitFile: false,
                                name: '[path][name].[ext]',
                                publicPath: (url, resourcePath, context) => {
                                    return '../';
                                },
                            },
                        },
                    ],
                },
            ],
        },
        // webpack dev server config
        devServer: {
            contentBase: demoPath,
            compress: true,
            port: 8080,
        },
    };
}

function copyFolders() {
    let options = [
        {
            // copy media
            from: srcPath + '/media',
            to: assetDistPath + '/media',
        },
        {
            // copy tinymce skins
            from: path.resolve(__dirname, 'node_modules') + '/tinymce/skins',
            to: assetDistPath + '/plugins/custom/tinymce/skins',
        },
        {
            // copy tinymce plugins
            from: path.resolve(__dirname, 'node_modules') + '/tinymce/plugins',
            to: assetDistPath + '/plugins/custom/tinymce/plugins',
        },
    ];

    if (fs.existsSync(coreSrcPath + '/media/plugins/jstree')) {
        options.push({
            // copy jstree image
            from: coreSrcPath + '/media/plugins/jstree',
            to: assetDistPath + '/plugins/custom/jstree',
            force: true
        });
    }

    if (dev) {
        options.push({
            // copy media from core
            from: coreSrcPath + '/media',
            to: assetDistPath + '/media',
        });
    }

    return options;
}

function getParameters() {
    var possibleArgs = [
        
        'js', 'css', 'scss',
        'alldemos', 'rtl', 'prod', 'production', 'localhost', 'dark_mode',
    ];
    for (var i = 0; i <= 13; i++) {
        possibleArgs.push('demo' + i);
    }

    var args = [];
    possibleArgs.forEach(function (key) {
        if (process.env['npm_config_' + key]) {
            args.push(key);
        }
    });

    if ('production' === process.env['NODE_ENV']) {
        args.push('production');
    }

    return args;
}

function getDemos(pathDemos) {
    // get possible demo from parameter command
    let demos = [];
    args.forEach((arg) => {
        const demo = arg.match(/^demo.*/g);
        if (demo) {
            demos.push(demo[0]);
        }
    });

    if (demos.length === 0) {
        demos = [];
        if (args.indexOf('alldemos') !== -1) {
            try {
                // sync reusable source code with demo1 for all other demos
                demos = fs.readdirSync(pathDemos).filter((file) => {
                    return !/(^|\/)\.[^\/\.]/g.test(file) && /^demo\d+$/g.test(file) && file !== 'demo0';
                });
            } catch (err) {
                console.error('Failed to read demo folder: ' + pathDemos);
            }
        }
    }

    return demos;
}

function importExtraPlugins() {
    // Optional: Import datatables.net
    extraPlugins.push(new MergeIntoSingle({
        files: {
            'plugins/custom/datatables/datatables.bundle.js': [
                "node_modules/datatables.net/js/jquery.dataTables.js",
                "node_modules/datatables.net-bs5/js/dataTables.bootstrap5.js",
                path.relative('./', demoPath) + "/src/js/vendors/plugins/datatables.init.js",
                "node_modules/jszip/dist/jszip.min.js",
                "node_modules/pdfmake/build/pdfmake.min.js",
                "node_modules/pdfmake/build/vfs_fonts.js",
                "node_modules/datatables.net-buttons/js/dataTables.buttons.min.js",
                "node_modules/datatables.net-buttons-bs5/js/buttons.bootstrap5.min.js",
                "node_modules/datatables.net-buttons/js/buttons.colVis.js",
                "node_modules/datatables.net-buttons/js/buttons.flash.js",
                "node_modules/datatables.net-buttons/js/buttons.html5.js",
                "node_modules/datatables.net-buttons/js/buttons.print.js",
                "node_modules/datatables.net-colreorder/js/dataTables.colReorder.min.js",
                "node_modules/datatables.net-colreorder-bs5/js/colReorder.bootstrap5.js",
                "node_modules/datatables.net-fixedcolumns/js/dataTables.fixedColumns.min.js",
                "node_modules/datatables.net-fixedcolumns-bs5/js/fixedColumns.bootstrap5.js",
                "node_modules/datatables.net-fixedheader/js/dataTables.fixedHeader.min.js",
                "node_modules/datatables.net-fixedheader-bs5/js/fixedHeader.bootstrap5.js",
                "node_modules/datatables.net-responsive/js/dataTables.responsive.min.js",
                "node_modules/datatables.net-responsive-bs5/js/responsive.bootstrap5.min.js",
                "node_modules/datatables.net-rowgroup/js/dataTables.rowGroup.min.js",
                "node_modules/datatables.net-rowgroup-bs5/js/rowGroup.bootstrap5.js",
                "node_modules/datatables.net-rowreorder/js/dataTables.rowReorder.min.js",
                "node_modules/datatables.net-rowreorder-bs5/js/rowReorder.bootstrap5.js",
                "node_modules/datatables.net-scroller/js/dataTables.scroller.min.js",
                "node_modules/datatables.net-scroller-bs5/js/dataTables.bootstrap5.js",
                "node_modules/datatables.net-select/js/dataTables.select.min.js",
                "node_modules/datatables.net-select-bs5/js/dataTables.bootstrap5.js",
                "node_modules/datatables.net-datetime/dist/dataTables.dateTime.min.js",
            ],
            'plugins/custom/datatables/pdfmake.min.js.map': [
                'node_modules/pdfmake/build/pdfmake.min.js.map',
            ],
            'plugins/custom/datatables/datatables.bundle.css': [
                "node_modules/datatables.net-bs5/css/dataTables.bootstrap5.css",
                "node_modules/datatables.net-buttons-bs5/css/buttons.bootstrap5.min.css",
                "node_modules/datatables.net-colreorder-bs5/css/colReorder.bootstrap5.min.css",
                "node_modules/datatables.net-fixedcolumns-bs5/css/fixedColumns.bootstrap5.min.css",
                "node_modules/datatables.net-fixedheader-bs5/css/fixedHeader.bootstrap5.min.css",
                "node_modules/datatables.net-responsive-bs5/css/responsive.bootstrap5.min.css",
                "node_modules/datatables.net-rowreorder-bs5/css/rowReorder.bootstrap5.min.css",
                "node_modules/datatables.net-scroller-bs5/css/scroller.bootstrap5.min.css",
                "node_modules/datatables.net-select-bs5/css/select.bootstrap5.min.css",
                "node_modules/datatables.net-datetime/dist/dataTables.dateTime.min.css",
            ],
            'plugins/custom/fullcalendar/fullcalendar.bundle.js': [
                'node_modules/fullcalendar/main.js',
                'node_modules/fullcalendar/locales-all.min.js',
            ],
            'plugins/custom/fullcalendar/fullcalendar.bundle.css': [
                'node_modules/fullcalendar/main.min.css',
            ],
        },
    }));
}

function getTheme(args) {
    let theme = "metronic";
    if (theme === 'metronic') {
        let themes = [
            
        ];
        args.some(function (t) {
            if (themes.indexOf(t) !== -1) {
                theme = t;
                return true;
            }
        });
    }
    return theme;
}

function removeExistingAssets() {
    if (typeof args.localhost !== 'undefined') {
        del(assetDistPath, {force: true});
    }
}

const baseName = (str, extension) => {
    let base = new String(str).substring(str.lastIndexOf("/") + 1);
    if (!extension && base.lastIndexOf(".") !== -1) {
        base = base.substring(0, base.lastIndexOf("."));
    }
    return base;
};

/**
 * Remove file name and get the path
 */
const pathOnly = (str) => {
    const array = str.split("/");
    if (array.length > 0) {
        array.pop();
    }

    return array.join("/");
};

/**
 * Change scss file name with suffix dark
 *
 * @param file
 * @returns {string|*}
 */
function changeDarkFileName(file) {
    // files that need to be changed to dark
    const files = ['style.scss', 'plugins.scss', 'style.bundle.css', 'plugins.bundle.css',];

    if (files.indexOf(baseName(file, true)) !== -1) {
        let path = pathOnly(file);
        if (path) {
            path += '/';
        }
        return path + baseName(file) + '.dark.scss';
    }
}


module.exports = () => {
    return [mainConfig()];
};
