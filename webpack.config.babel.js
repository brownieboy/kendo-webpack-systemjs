/* global process, __dirname */
import path from "path";
import webpack from "webpack";
import merge from "webpack-merge";

const TARGET = process.env.npm_lifecycle_event;
const ROOT_PATH = path.resolve(__dirname);
const srcDir = path.join(__dirname, "src");
// const bowerDir = ROOT_PATH + "/bower_components";

const PATHS = {
    src: "src/",
    srcjs: "src/js"
};

// console.log("webpack is using webpack.config.babel.js, TARGET = " + TARGET);
var exportModule = {};

const common = {
    entry: {
        app: path.resolve(ROOT_PATH) + "/" + PATHS.srcjs + "/index.js"
    },
    resolve: {
        // Hard-coded path to kendo src files is only necessary due to this
        // bug: https://github.com/webpack/webpack/issues/1897
        // Note: this wasn"t require in previous releases of kendo
        modulesDirectories: ["node_modules", "bower_components",
            path.join(__dirname, "bower_components/kendo-ui/src/js")
        ]
    },
    module: {
        loaders: [{
            loader: "babel-loader",
            include: [
                path.resolve(__dirname, PATHS.srcjs)
            ],
            // Only run `.js` files through Babel
            test: /\.js?$/
        }]
    },
    plugins: [
        // Doesn't work with the 2016 versions of Kendo.  I don"t know why.  It worked
        // with the 2015 versions.  So have added a separate <script> tag to load
        // jQuery for now.
        // new webpack.ProvidePlugin({
        //     $: "jquery",
        //     jQuery: "jquery",
        //     "window.jQuery": "jquery"
        // })
    ],
    devtool: "source-map"
};


if (TARGET === "buildwp") {
    // Includes minification, so slow build times and smaller files.  Use for final build to prod only.
    exportModule = merge(common, {
        output: {
            path: path.resolve(ROOT_PATH, "build/js/"),
            filename: "[name].js"
        },

        plugins: [
            new webpack.optimize.CommonsChunkPlugin("vendor", "vendor.js", function(module) {
                return module.resource && module.resource.indexOf(srcDir) === -1;
            }),
            new webpack.optimize.UglifyJsPlugin({
                compress: {
                    warnings: false
                }
            })
        ]
    });
}

// Note when inline is set to true, we get an error:
//  Module not found: Error: Cannot resolve "file" or "directory" ./dist/debug.js
// see http://stackoverflow.com/questions/34549508/webpack-dev-server-error-with-hot-module-replacement
const devServerCommon = {
    devServer: {
        colors: true,
        noInfo: false,
        historyApiFallback: true,
        hot: true,
        inline: true,
        progress: true
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
};

const startCommon = merge(common, devServerCommon);

if (TARGET === "start" || !TARGET) {
    exportModule = merge(startCommon, {
        output: {
            filename: "src/[name]bundle.js"
        }
    });
}

export default exportModule;
