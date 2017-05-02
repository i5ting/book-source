const net = require("net")

const app = net.createServer((connect) => {
  console.log("client connected")
  
  connect.on("data", (data) => {
    //解析头，然后做net.connet...
    console.log(data.toString())  
  })
  
  connect.on("end", () => {
    console.log('client disconnected')
  })
})

app.listen(3000)