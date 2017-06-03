const querystring = require('querystring')
const http = require('http')

// 定义请求数据
const data = querystring.stringify({
  username: 'yourUsername',
  password: 'yourPassword'
})

// 定义http请求选项
const options = {
  host: '127.0.0.1',
  path: '/users/post',
  port: '3000',
  method: 'POST',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    'Content-Length': Buffer.byteLength(data)
  }
}

// 定义http请求回调函数
const callback = function(response) {
  let str = ''
  response.on('data', function (chunk) {
    str += chunk
  })

  response.on('end', function () {
    console.log(str)
  })
}

// 定义http请求
const req = http.request(options, callback)

// 写入表单数据
req.write(data)

// 发送请求
req.end()
