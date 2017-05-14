function createReq (url, originalUrl) {
  return {
    originalUrl: originalUrl,
    url: url
  }
}

const req = createReq('https://127.0.0.1:8080/site/oneway_list.htm?a=1&b=2#abc')
const url = require('parseurl')(req)

console.log(url)
