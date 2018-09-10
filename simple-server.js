require('dotenv').config()
const http = require('http')

const hostname = '127.0.0.1'
const port = process.env.PORT || 3000

const server = http.createServer((req, res) => {
  console.log(req.method, req.url)
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/plain');
  res.end(`Hello World. Ich bin auf Port ${port}.\n`)
})

server.listen(port, hostname, () => {
  console.log('started', port)
})
