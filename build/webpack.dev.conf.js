let path = require("path")
let devServer = require("./devserver.js")
let common = require("./webpack.base.conf.js")
const { merge } = require('webpack-merge');
const webpack = require('webpack');

function resolve(relatedPath) {
    return path.join(__dirname, relatedPath)
}

module.exports = merge(common, {

    mode: "development",
    devtool: 'inline-source-map',
    devServer: devServer(resolve("../public")),
    output: {
        path: resolve('../public'),
        filename: '[name].js',
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
});