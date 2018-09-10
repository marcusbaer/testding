// https://expressjs.com/de/

const express = require('express')
const app = express()

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

app.listen(8080, () => {
})
