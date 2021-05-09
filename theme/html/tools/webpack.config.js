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

// paths
const rootPath = path.resolve(__dirname, '..');

// arguments/params from the line command
const args = getParameters();

// get theme name
let theme = 'metronic';
// get selected demo, default demo1
let demo = getDemos(rootPath)[0];

// under demo paths
const demoPath = rootPath + '/' + demo;
const distPath = demoPath + '/dist';
const assetDistPath = distPath + '/assets';
const srcPath = demoPath + '/src';

const extraPlugins = [];
const exclude = [];

const js = args.indexOf('js') !== -1;
const css = args.indexOf('css') !== -1 || args.indexOf('scss') !== -1;

addtionalSettings();

importDatatables();

function importDatatables() {
    // Optional: Import datatables.net
    extraPlugins.push(new MergeIntoSingle({
        files: {
            'plugins/custom/datatables/datatables.bundle.js': [
                'node_modules/datatables.net/js/jquery.dataTables.js',
                'node_modules/datatables.net-bs4/js/dataTables.bootstrap4.js',
                '@/src/js/vendors/plugins/datatables.init.js',
                'node_modules/datatables.net-autofill/js/dataTables.autoFill.min.js',
                'node_modules/datatables.net-autofill-bs4/js/autoFill.bootstrap4.min.js',
                'node_modules/jszip/dist/jszip.min.js',
                'node_modules/pdfmake/build/pdfmake.min.js',
                'node_modules/pdfmake/build/vfs_fonts.js',
                'node_modules/datatables.net-buttons/js/dataTables.buttons.min.js',
                'node_modules/datatables.net-buttons-bs4/js/buttons.bootstrap4.min.js',
                'node_modules/datatables.net-buttons/js/buttons.colVis.js',
                'node_modules/datatables.net-buttons/js/buttons.flash.js',
                'node_modules/datatables.net-buttons/js/buttons.html5.js',
                'node_modules/datatables.net-buttons/js/buttons.print.js',
                'node_modules/datatables.net-colreorder/js/dataTables.colReorder.min.js',
                'node_modules/datatables.net-fixedcolumns/js/dataTables.fixedColumns.min.js',
                'node_modules/datatables.net-fixedheader/js/dataTables.fixedHeader.min.js',
                'node_modules/datatables.net-keytable/js/dataTables.keyTable.min.js',
                'node_modules/datatables.net-responsive/js/dataTables.responsive.min.js',
                'node_modules/datatables.net-responsive-bs4/js/responsive.bootstrap4.min.js',
                'node_modules/datatables.net-rowgroup/js/dataTables.rowGroup.min.js',
                'node_modules/datatables.net-rowreorder/js/dataTables.rowReorder.min.js',
                'node_modules/datatables.net-scroller/js/dataTables.scroller.min.js',
                'node_modules/datatables.net-select/js/dataTables.select.min.js',
            ],
            'plugins/custom/datatables/pdfmake.min.js.map': [
                'node_modules/pdfmake/build/pdfmake.min.js.map',
            ],
            'plugins/custom/datatables/datatables.bundle.css': [
                'node_modules/datatables.net-bs4/css/dataTables.bootstrap4.css',
                'node_modules/datatables.net-buttons-bs4/css/buttons.bootstrap4.min.css',
                'node_modules/datatables.net-autofill-bs4/css/autoFill.bootstrap4.min.css',
                'node_modules/datatables.net-colreorder-bs4/css/colReorder.bootstrap4.min.css',
                'node_modules/datatables.net-fixedcolumns-bs4/css/fixedColumns.bootstrap4.min.css',
                'node_modules/datatables.net-fixedheader-bs4/css/fixedHeader.bootstrap4.min.css',
                'node_modules/datatables.net-keytable-bs4/css/keyTable.bootstrap4.min.css',
                'node_modules/datatables.net-responsive-bs4/css/responsive.bootstrap4.min.css',
                'node_modules/datatables.net-rowgroup-bs4/css/rowGroup.bootstrap4.min.css',
                'node_modules/datatables.net-rowreorder-bs4/css/rowReorder.bootstrap4.min.css',
                'node_modules/datatables.net-scroller-bs4/css/scroller.bootstrap4.min.css',
                'node_modules/datatables.net-select-bs4/css/select.bootstrap4.min.css',
            ],
        },
    }));
}

function addtionalSettings() {
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
        // Metronic css/js
        'css/style.bundle': './' + path.relative('./', srcPath) + '/sass/style.scss',
        'js/scripts.bundle': './webpack/scripts.' + demo + '.js',
    };

    // Custom 3rd party plugins
    (glob.sync('./webpack/plugins/custom/**/*.+(js)') || []).forEach(file => {
        let loc = file.replace('webpack/', '').replace('./', '');
        if (path.basename(file) === 'gmaps.js') {
            loc = loc.replace('.js', '');
        } else {
            loc = loc.replace('.js', '.bundle');
        }
        entries[loc] = file;
    });

    // Metronic css pages (single page use)
    (glob.sync(path.relative('./', srcPath) + '/sass/pages/**/!(_)*.scss') || []).forEach(file => {
        entries[file.replace(/.*sass\/(.*?)\.scss$/ig, 'css/$1')] = './' + file;
    });
    (glob.sync(path.relative('./', srcPath) + '/js/pages/**/!(_)*.js') || []).forEach(file => {
        entries[file.replace(/.*js\/(.*?)\.js$/ig, 'js/$1')] = './' + file;
    });

    // Metronic theme
    (glob.sync(path.relative('./', srcPath) + '/sass/themes/**/!(_)*.scss') || []).forEach(file => {
        entries[file.replace(/.*sass\/(.*?)\.scss$/ig, 'css/$1')] = './' + file;
    });

    return entries;
}

function mainConfig() {
    return {
        // enabled/disable optimizations
        mode: args.indexOf('production') !== -1 ? 'production' : 'development',
        // console logs output, https://webpack.js.org/configuration/stats/
        stats: 'errors-warnings',
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
                '@': demoPath,
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
                patterns: [
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
                ],
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
            contentBase: demoPath + '/dist',
            compress: true,
            port: 3000,
        },
    };
}

function getParameters() {
    var possibleArgs = [
        'js', 'css', 'scss',
        'alldemos', 'rtl', 'prod', 'production',
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
        demos = ['demo1'];
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

module.exports = () => {
    return [mainConfig()];
};
