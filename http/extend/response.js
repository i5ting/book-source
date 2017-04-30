'use strict'

const http = require('http')

var res = Object.create(http.ServerResponse.prototype)

res.json = function json(obj) {
  var body = JSON.stringify(obj)

  this.writeHead(200, {
    'Content-Length': Buffer.byteLength(body),
    'Content-Type': 'application/json' })

  return this.end(body)
}

module.exports = res
