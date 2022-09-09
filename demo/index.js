const customp = require('universal-file-parser');

const express = require('express')
const app = express()
app.use(express.urlencoded())
app.use(express.json())
const port = 3000

app.post('/',async (req, res) => {
  await customp.default("profile_image",req,{
    "type": "url",
  })
  res.send(req.body.profile_image);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})