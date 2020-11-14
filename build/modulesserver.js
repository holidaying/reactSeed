const express = require('express')
const app = express()
const port = 7000
const path = require('path')
app.use('/remote',express.static(path.resolve(__dirname, '../page')));
app.listen(port, () => console.log(`Example app listening on port ${port}!`))