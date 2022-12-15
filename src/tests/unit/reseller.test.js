process.env.NODE_ENV = 'test';
process.env.PORT = 3010;

const chai = require('chai');
const chaiHttp = require('chai-http');

const should = chai.should();
const server = require('@/src/server');

chai.use(chaiHttp);

describe('Reseller Endpoint:', () => {
  it('Should return resellers array', (done) => {
    chai
      .request(server)
      .get('/v1/resellers')
      .end((err, res) => {
        res.should.have.status(200);
        const { body } = res;
        should.exist(body);
        body.should.be.a('object');
        body.should.have.property('data');
        body.data.should.be.a('object');
        body.data.should.have.property('resellers');
        body.data.resellers.should.be.a('array');
        body.data.resellers.length.should.be.above(0);
        done();
      });
  });
});
