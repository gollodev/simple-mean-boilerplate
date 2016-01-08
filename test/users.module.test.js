var app = require('../app'),
    request = require('supertest');

describe('GET /user', function(){
  it('respond with json', function(done){
    request(app)
      .get('/api/users')
      .expect('Content-Type', /json/)
      .expect('Content-Length', '15')
      .expect(200)
      .end(function(err, res){
        if (err) throw err;
        done()
      });
  })
});
