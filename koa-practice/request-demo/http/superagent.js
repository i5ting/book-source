const request = require('superagent')

request
  .post('http://127.0.0.1:3000/users/post')
  .send({ 
    username: 'yourUsername',
    password: 'yourPassword'
  }) // sends a JSON post body
  .end(function(err, res){
    // Calling the end function will send the request
    console.log(res.body)
  });