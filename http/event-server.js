const http = require('http')

const app = http.createServer(function(req, res) {
  console.log(`${req.method} ${req.url}`)
  // 设置Response状态码和Headers
  res.writeHead(200, {'Content-Type': 'text/plain'})
  
  // 设置Response向浏览器写入内容
  res.end('Hello Node.js\n')
})

app.on('request', function(request, response) {
  // the same kind of magic happens here!
});

app.listen(3000, ()  => {
  const PORT = app.address().port
  
  console.log(`Server running at http://127.0.0.1:${PORT}/`)
})
