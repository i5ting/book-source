const http = require('http')
const PORT = 3000

http.createServer((req, res) => {
  // 设置Response状态码和Headers
  res.writeHead(200, {'Content-Type': 'text/plain'})
  
  // 设置Response向浏览器写入内容
  res.end('Hello Node.js\n')
}).listen(PORT)

console.log(`Server running at http://127.0.0.1:${PORT}/`)