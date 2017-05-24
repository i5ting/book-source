const router = require('koa-router')()
const multer = require('koa-multer');
const upload = multer({ dest: 'uploads/' });

router.prefix('/users')

router.post('/', upload.any(), (ctx) => {
	console.log(ctx.req.files)
	ctx.body = {
		status: {
			code: 0,
			msg: 'upload sucess'
		},
		data: {
			body: ctx.req.body
		}
	}
})

router.get('/:id', (ctx, next) => {
  ctx.body = 'show user id = ' + ctx.params.id
})

// POST http://127.0.0.1:3001/users/post
router.post('/post', (ctx, next) => {
	console.log(ctx.request.body)
	ctx.body = ctx.request.body
})

router.post('/post/formdata', upload.any(), (ctx) => {
	console.log(ctx.req.files)
	ctx.body = {
		status: {
			code: 0,
			msg: 'upload sucess'
		},
		data: {
			body: ctx.req.body,
			files: ctx.req.files
		}
	}
})

router.post('/post/raw', (ctx, next) => {
	ctx.body = ctx.request.body
})

module.exports = router
