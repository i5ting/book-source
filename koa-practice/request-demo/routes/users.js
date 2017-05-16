const router = require('koa-router')()

router.prefix('/users')

router.get('/', (ctx, next) => {
  ctx.body = 'respond with a resource'
})

router.get('/:id', (ctx, next) => {
  ctx.body = 'show user id = ' + ctx.params.id
})

// POST http://127.0.0.1:3001/users/post
router.post('/post', (ctx, next) => {
	ctx.body = ctx.request.body
})

router.post('/post/formdata', (ctx, next) => {
  // ctx.body = 'respond with a resource'
	console.log(req.body, req.files)
	console.log(req.files.pic.path)
	res.json(req.body)
})

router.post('/post/raw', (ctx, next) => {
  // ctx.body = 'respond with a resource'
	res.json(JSON.parse(req.text))
})

module.exports = router
