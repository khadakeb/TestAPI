var chai = require('chai');
var expect = require('chai').expect;
var chaiHttp = require('chai-http');
chai.use(chaiHttp);


var baseUrl = "http://localhost:3000";

describe('API test', function() {
  let accessToken = "YWRtaW46YWRtaW4=";
  it('Create user', function(done) { // <= Pass in done callback
    chai.request(baseUrl)
      .post('/user')
      .type('form')
      .send({
        name: 'Name',
        lname: 'Lname',
        mname: 'Mname',
        gender: 'Male',
        address1:'address1',
        address2: 'address2',
        city: 'TestCity',
        country: 'TestCountry',
        email: 'email@mail.com',
        created_by: 'admin',
        created_date: '2019/02/26'
      })
      .set('Content-Type', 'application/x-www-form-urlencoded')
      .set('access-token', accessToken)
      .end(function(err, res) {
        res.text = JSON.parse(res.text);
        expect(res.text.ack).to.equal('success')
        expect(res).to.have.status(200)
        done();
      });
  });

  it('Get uses details', function(done) { // <= Pass in done callback
    chai.request(baseUrl)
    .get('/user')
    .set('access-token', accessToken)
    .set('Content-Type', 'application/json')
    .end(function(err, res) {
        res.text = JSON.parse(res.text);
        expect(res.text.ack).to.equal('success');
        expect(res.text).to.have.all.keys('ack','results');
        if(res.text.results.length > 0 ){
          // We can check for perticular responce data
        }
        expect(res).to.have.status(200);
        done();                               // <= Call done to signal callback end
    });
  }) ;

});
