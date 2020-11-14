
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
let common = require("./webpack.base.conf.js")
const {merge} = require('webpack-merge');
let path = require("path")
let version = "lastest";
module.exports = merge(common,{
    mode:"production",
    entry:{"index":path.resolve("src/modules/Index/index.js")},
    output: {
        path: path.resolve(`page/modules/index/${version}`),
        filename: '[name].js',
        library:"_myIndex",
        libraryTarget:"umd",
        chunkFilename: '[name].[hash].chunk.js',
    },
    plugins: [
        new CleanWebpackPlugin(),
    ]
});