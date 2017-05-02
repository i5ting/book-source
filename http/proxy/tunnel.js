const http = require('http')
const url = require('url')
const net = require('net')

const app = http.createServer((req, res) => {
  proxy (req, res) 
})

function proxy (req, res) {
  let options = {
     host : req.host,
     port : 3000,
     headers: req.headers,
     path : '/remote',
     agent : false,
     method : 'GET'
  }
  
  let httpProxy = http.request(options, (response) => {
    response.pipe(res)
  })
    
  req.pipe(httpProxy)
}

// https的请求通过http隧道方式转发
app.on('connect', (req, socket, head) => {
  // connect to an origin server
  const serverUrl = url.parse(`http://${req.url}`)

  console.log(`CONNECT ${serverUrl.hostname}:${serverUrl.port}`)
  
  const socketClient = net.connect(serverUrl.port, serverUrl.hostname, () => {
    socket.write('HTTP/1.1 200 Connection Established\r\n' +
                    'Proxy-agent: MITM-proxy\r\n' +
                    '\r\n')
    socketClient.write(head)
    
    // 中间基于Stream代理层
    socketClient.pipe(socket)
    socket.pipe(socketClient)
  })
})

app.listen(3000, ()  => {
  const PORT = app.address().port
  
  console.log(`HTTP中间人代理启动成功 running at http://127.0.0.1:${PORT}/`)
})
