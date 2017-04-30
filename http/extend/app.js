const http = require('http')

const extendedRequest = require('./request')
const response = require('./response')

const app = http.createServer((req, res) => {
  var request = Object.create(extendedRequest);
  request.request = req;

  res.__proto__ = response
  
  res.json({
    data: {
      query: request.query
    },
    status: {
      code: 0,
      msg: 'sucess'
    }
  })
})

app.listen('3000', function() {
  const PORT = app.address().port
  
  console.log(`Server running at http://127.0.0.1:${PORT}/`)
})
