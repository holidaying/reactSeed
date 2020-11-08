let path = require("path");
let sysName = process.npm_config_sysname||"pc";
const HtmlWebpackPlugin = require('html-webpack-plugin');
function resolve(relatedPath) {
    return path.join(__dirname, relatedPath)
}
module.exports = {
    pc: {
        entry: {
            home: ['react-hot-loader/patch', resolve("../src/apps/pc/index.js")],
            page: ['react-hot-loader/patch', resolve("../src/apps/pc/page/index.js")]
        },
        dist: {
            path: resolve(`../dist/${sysName}`),
            filename: '[name].js',
            library:"liudan-xui",
            libraryTarget:'umd',
        },
        output: {
            path: resolve('../public'),
            filename: '[name].js',
            chunkFilename: '[name].[hash].chunk.js',
        },
        plugins: [
            new HtmlWebpackPlugin({
                title: '主页面',
                filename: 'index.html',
                template: resolve('../src/template/index.html'),
                hash: true, // 会在打包好的bundle.js后面加上hash串
                inject: "body",
                chunks:["home"]
            }),
            new HtmlWebpackPlugin({
                title: '跳转页面',
                filename: 'page.html',
                template: resolve('../src/template/page.html'),
                hash: true, // 会在打包好的bundle.js后面加上hash串
                inject: "body",
                chunks: ["page"]
            })
        ],
    },
    web: {
        entry: {
            home: ['react-hot-loader/patch', resolve("../src/apps/web/index.js")],
        },
        dist: {
            path: resolve(`../dist/${sysName}`),
            filename: '[name].js',
        },
        output: {
            path: resolve('../public'),
            filename: '[name].js',
            chunkFilename: '[name].[hash].chunk.js',
        },
        plugins: [
            new HtmlWebpackPlugin({
                title: 'webDemo',
                filename: 'index.html',
                template: resolve('../src/template/index.html'),
                hash: true, // 会在打包好的bundle.js后面加上hash串
                inject: "body",
                chunks: ["home"]
            })
        ],
    }
}