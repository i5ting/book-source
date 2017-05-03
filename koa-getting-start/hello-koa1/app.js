const koa = require('koa')
const app = koa()

// logger
app.use(function *loggermildleware(next){
  let start = new Date

  console.log('[logger middleware] before yield...')
  yield next
  console.log('[logger middleware] after yield...')
  
  let ms = new Date - start
  console.log('%s %s - %s', this.method, this.url, ms)
})

// response
app.use(function *responsemildleware(){
  console.log('[response middleware] response...')

  this.body = 'Hello World'
})

app.listen(3000)
