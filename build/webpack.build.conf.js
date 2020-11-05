
const CleanWebpackPlugin = require('clean-webpack-plugin');
let common = require("./webpack.base.conf.js")
const {merge} = require('webpack-merge');

let path = require("path")
function resolve(relatedPath) {
    return path.join(__dirname, relatedPath)
}
module.exports = merge(common,{
    plugins: [
        new CleanWebpackPlugin(['dist']),
    ]
});