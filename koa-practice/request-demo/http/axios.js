const axios = require('axios')

axios.defaults.baseURL = 'http://127.0.0.1:3000'

axios.post('/users/post', {
  username: 'yourUsername',
  password: 'yourPassword'
})
.then(function (response) {
  console.log(response.data)
})
.catch(function (error) {
  console.log(error)
})