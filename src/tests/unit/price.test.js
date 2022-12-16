process.env.NODE_ENV = 'test';
process.env.PORT = 3010;

const chai = require('chai');
const chaiHttp = require('chai-http');

const should = chai.should();
const server = require('../../server');

chai.use(chaiHttp);

describe('Price Endpoint:', () => {
  beforeEach(
    () =>
      new Promise((resolve) => {
        setTimeout(() => {
          resolve();
        }, 1000);
      })
  );

  it('Should return price array', (done) => {
    chai
      .request(server)
      .get('/v1/prices')
      .end((err, res) => {
        res.should.have.status(200);
        const { body } = res;
        should.exist(body);
        body.should.be.a('object');
        body.should.have.property('data');
        body.data.should.be.a('object');
        body.data.should.have.property('prices');
        body.data.prices.should.be.a('array');
        body.data.prices.length.should.be.above(0);
        done();
      });
  });

  it('Should return price array for category', (done) => {
    const category = '3dprinters';
    chai
      .request(server)
      .get(`/v1/prices/category/${category}`)
      .end((err, res) => {
        res.should.have.status(200);
        const { body } = res;
        should.exist(body);
        body.should.be.a('object');
        body.should.have.property('data');
        body.data.should.be.a('object');
        body.data.should.have.property('prices');
        body.data.prices.should.be.a('array');
        body.data.prices.length.should.be.above(0);
        done();
      });
  });

  it('Should return price for a product', (done) => {
    const product = 'zaxe-z3';
    chai
      .request(server)
      .get(`/v1/prices/product/${product}`)
      .end((err, res) => {
        res.should.have.status(200);
        const { body } = res;
        should.exist(body);
        body.should.be.a('object');
        body.should.have.property('data');
        body.data.should.be.a('object');
        body.data.should.have.property('price');
        body.data.price.should.be.a('object');
        body.data.price.should.have.property('price');
        done();
      });
  });
});
