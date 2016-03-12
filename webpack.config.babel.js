import path from 'path';
import webpack from 'webpack';
import merge from 'webpack-merge';

const TARGET = process.env.npm_lifecycle_event;
const ROOT_PATH = path.resolve(__dirname);
const srcDir = path.join(__dirname, 'src');
const bower_dir = ROOT_PATH + '/bower_components';

const PATHS = {
    src: "src/",
    srcjs: "src/js"
};

console.log("webpack is using webpack.config.babel.js, TARGET = " + TARGET);
var exportModule = {};

console.log("fallback=" + path.join(__dirname, "bower_components/kendo-ui/src/js"));

const common = {
    entry: {
        app: path.resolve(ROOT_PATH) + "/" + PATHS.srcjs + "/app.js"
    },
    resolve: {
        // Hard-coded path to kendo src files is only necessary due to this
        // bug: https://github.com/webpack/webpack/issues/1897
        // Note: this wasn't require in previous release of kendo
        modulesDirectories: ['node_modules', 'bower_components',
            path.join(__dirname, 'bower_components/kendo-ui/src/js')
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
        // new webpack.ProvidePlugin({
        //     $: "jquery",
        //     jQuery: "jquery",
        //     "window.jQuery": "jquery"
        // })
    ],
    devtool: 'source-map'
};


// Note when inline is set to true, we get an error:
//  Module not found: Error: Cannot resolve 'file' or 'directory' ./dist/debug.js
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

if (TARGET === 'start' || !TARGET) {
    exportModule = merge(startCommon, {
        output: {
            filename: 'src/[name]bundle.js'
        }
    });
}

export default exportModule;
