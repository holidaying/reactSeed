
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
let common = require("./webpack.base.conf.js")
const {merge} = require('webpack-merge');
const appsConfig  = require("./appsConfig");
const sysName = (process.argv.slice(-1)[0]).split("=")[1]||"pc";
// let path = require("path")
module.exports = merge(common,{
    entry:appsConfig[sysName].entry,
    output: appsConfig[sysName].dist,
    plugins: [
        new CleanWebpackPlugin(),
        ...appsConfig[sysName].plugins
    ]
});