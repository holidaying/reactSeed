const express = require('express')
const app = express()
const port = 5000
const path = require('path')
app.use('/dist',express.static(path.join(__dirname, '../dist')));
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
app.post('/education/api/login', function (req, res) {
    // 接收请求参数
    console.log(req.body);
    res.send({"data":true})
  })