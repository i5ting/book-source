const request = require('request')

request.post({
  url:'http://127.0.0.1:3000/users/post', 
  form: {
    username: 'yourUsername',
    password: 'yourPassword'
  }
}, (err, httpResponse, body) => {
  if (err) console.log(err)
  console.log(body)
})