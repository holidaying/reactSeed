const express = require('express')
const cookieParser = require("cookie-parser");
const bodyParser = require('body-parser')

const app = express()
const port = 5000
const path = require('path')
const Token = require("./token");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use('/dist', express.static(path.join(__dirname, '../dist')));
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
app.post('/education/api/login', function (req, res) {
    // 接收请求参数
    console.log(req.body.username);
    res.cookie("oath", Token.createToken(req.body.username, Date.now()), { maxAge: 900000, httpOnly: true });
    res.send({ "data": true })
})