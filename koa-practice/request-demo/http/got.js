const got = require('got')

got.post('http://127.0.0.1:3000/users/post', {
	body: {
    username: 'yourUsername',
    password: 'yourPassword'
  },
  form: true
}).then(response => {
  console.log(response.body)
  //=> '<!doctype html> ...'
})
.catch(error => {
  console.log(error.response.body)
  //=> 'Internal server error ...'
})