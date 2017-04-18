import test from 'ava';

const coffee = require('coffee');
  
test.cb('hello with no args', t => {
  coffee.spawn('hello')
    .expect('stdout', 'hello cli\n')
    .expect('code', 0)
  .end(t.end);
});