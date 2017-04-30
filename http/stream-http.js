const http = require('http')

const app = http.createServer((req, res) => {
  if (req.method === 'GET' && req.url === '/echo') {
    req.pipe(res)
  } else {
    res.statusCode = 404
    res.end()
  }
})

app.listen(3000, ()  => {
  const PORT = app.address().port
  
  console.log(`Server running at http://127.0.0.1:${PORT}/`)
})
