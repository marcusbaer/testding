// https://expressjs.com/de/
require('dotenv').config()

const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.use(express.static('public'))

app.get('/api', (req, res, next) => {
  console.log(req.query)
  res.json(Object.assign({
    test: 'ok'
  }, req.query))
})

app.get('/hello', (req, res) => {
  res.send('Hello World')
})

app.listen(port, () => {
  console.log(`Server läuft auf Port ${port}`);
})