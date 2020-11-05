


const HtmlWebpackPlugin = require('html-webpack-plugin');
let path = require("path")
function resolve(relatedPath) {
    return path.join(__dirname, relatedPath)
}
module.exports = {
    entry: {
        home: resolve("../src/index.js"),
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            //babel处理js
            {
                test: /\.js|jsx$/,
                exclude: /node_modules/, //排除此文件夹
                use: [
                    'babel-loader'
                ]
            },
            {
                test: /\.svg$/,
                use: [
                    {
                        loader: "babel-loader"
                    },
                    {
                        loader: "react-svg-loader",
                        options: {
                            jsx: true // true outputs JSX tags
                        }
                    }
                ]
            }

        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Development',
            filename: 'index.html',
            template: resolve('../src/template/index.html'),
            hash: true, // 会在打包好的bundle.js后面加上hash串
            inject: "body"
        })
    ]
};