const package = require('../dist/lib/index.js');

const express = require('express')
const app = express()
app.use(express.urlencoded())
app.use(express.json())

const port = 3000

app.post('/', (req, res) => {
    package.default("profile_image",req);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})