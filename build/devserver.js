module.exports = function (path) {
    return {
        contentBase: path,
        compress: true,
        port: 9000,
        hot:true,
        inline:true,
        proxy: {
            "/gataway": {
              target: "http://localhost:5000",
              pathRewrite: {"^/gataway" : ""},
              secure:false
            }
          }
    }
}