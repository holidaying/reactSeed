

let path = require("path")
function resolve(relatedPath) {
    return path.join(__dirname, relatedPath)
}
module.exports = {
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
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
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192
                        }
                    }
                ]
            },
            {
                test: /\.(mp4)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            limit: 100
                        }
                    }
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
    resolve: {
        // alias: {
        //     "react-dom": "@hot-loader/react-dom",
        // },
        alias: {
            src: resolve("../src"),
            public: resolve("../public"),
            apps: resolve("../src/apps")
        }
    }
};