const http = require('http')

const app = http.createServer((req, res) => {
  console.log(`${req.method} ${req.url}`)
  // 设置Response状态码和Headers
  res.writeHead(200, {'Content-Type': 'text/html'})
  
  // 设置Response向浏览器写入内容
  res.write("<!DOCTYPE 'html'>")
  res.write("<html>")
  res.write("<head>")
  res.write("<title>《更了不起的Node.js》</title>")
  res.write("</head>")
  res.write("<body>")
  res.write("Hello HTML!")
  res.write("</body>")
  res.write("</html>")

  res.end()
})

app.listen(3000, ()  => {
  const PORT = app.address().port
  
  console.log(`Server running at http://127.0.0.1:${PORT}/`)
})
