module.exports = function (path) {
    return {
        contentBase: path,
        compress: true,
        port: 9000,
        hot:true,
        inline:true
    }
}