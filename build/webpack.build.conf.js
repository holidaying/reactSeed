
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
let common = require("./webpack.base.conf.js")
const {merge} = require('webpack-merge');

let path = require("path")
function resolve(relatedPath) {
    return path.join(__dirname, relatedPath)
}
module.exports = merge(common,{
    output: {
        path: resolve('../dist'),
        filename: '[name].js',
    },
    plugins: [
        new CleanWebpackPlugin(),
    ]
});