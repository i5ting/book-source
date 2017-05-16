const router = require('koa-router')()
const multer = require('koa-multer');
const upload = multer({ dest: 'uploads/' });

router.prefix('/upload')
router.post('/', upload.single('avatar'), (ctx) => {
	ctx.body = {
		status: {
			code: 0,
			msg: 'upload sucess'
		},
		data: {
			
		}
	}
})


module.exports = router
