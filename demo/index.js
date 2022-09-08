const customp = require('../dist/lib/index.js');

const express = require('express')
const app = express()
app.use(express.urlencoded())
app.use(express.json())
const multer  = require('multer')
const upload = multer()
const port = 3000

app.post('/',async (req, res) => {
  res.send(await customp.default("profile_image",req));
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})