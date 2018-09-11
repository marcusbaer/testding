// https://expressjs.com/de/
require('dotenv').config()

const express = require('express')
const app = express()
const port = process.env.PORT || 3000
let name = 'unbekannterNutzer'

app.use(express.static('public'))

app.get('/api', (req, res, next) => {
  console.log(req.query)
  res.json(Object.assign({
    test: 'ok'
  }, req.query))
})

app.get('/user/:name', (req, res, next) => {
  name = req.params.name;
  console.log(req.params.name);
  res.send(req.params.name);
})

app.get('/user', (req, res) => {
  res.send(name);
}) 

app.get('/hello', (req, res) => {
  res.send('Hello World')
})

app.listen(port, () => {
  console.log(`Server läuft auf Port ${port}`);
})