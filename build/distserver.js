const express = require('express')
const app = express()
const port = 6000
const path = require('path')
app.use('/dist',express.static(path.join(__dirname, '../dist')));
app.listen(port, () => console.log(`Example app listening on port ${port}!`))