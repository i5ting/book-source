const Koa = require('koa')
const app = new Koa()

app.use(async ctx => {
  ctx.body = {
    method: ctx.method
  }
})

app.listen(3000)
