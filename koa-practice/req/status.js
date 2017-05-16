const Koa = require('koa')
const app = new Koa()

app.use(async ctx => {
  ctx.status = 500;
  ctx.type = "html"
  ctx.body = "<h1>this is status demo</h1>"
})

app.listen(3000)
