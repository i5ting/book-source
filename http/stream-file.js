const http = require('http')
const fs = require('fs')

const app = http.createServer((req, res) => {
    fs.readFile(__dirname + '/data.txt', (err, data) => {
        res.end(data)
    })
})

app.listen(3000, function() {
  const PORT = app.address().port
  
  console.log(`Server running at http://127.0.0.1:${PORT}/`)
})
