const http = require('http')

const app = http.createServer((req, res) => {
  if (req.method === 'GET' && req.url === '/echo') {
    var body = []
    req.on('data', function(chunk) {
      body.push(chunk)
    }).on('end', function() {
      body = Buffer.concat(body).toString()
      res.end(body)
    })
  } else {
    res.statusCode = 404
    res.end()
  }
})

app.listen(3000, () => console.log(`Server running at http://127.0.0.1:${app.address().port}/`))
