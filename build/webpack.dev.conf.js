let path = require("path")
let devServer = require("./devserver.js")
let common = require("./webpack.base.conf.js")
const { merge } = require('webpack-merge');
const webpack = require('webpack');
const appsConfig  = require("./appsConfig");
const sysName = (process.argv.slice(-1)[0]).split("=")[1]||"pc";


function resolve(relatedPath) {
    return path.join(__dirname, relatedPath)
}

module.exports = merge(common, {
    mode: "development",
    devtool: 'inline-source-map',
    entry:appsConfig[sysName].entry,
    devServer: devServer(resolve("../public")),
    output: appsConfig[sysName].output,
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        ...appsConfig[sysName].plugins
    ],
});