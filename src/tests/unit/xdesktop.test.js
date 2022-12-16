process.env.NODE_ENV = 'test';
process.env.PORT = 3010;

const chai = require('chai');
const chaiHttp = require('chai-http');

const should = chai.should();
const server = require('../../server');

chai.use(chaiHttp);

describe('xDesktop Endpoint:', () => {
  beforeEach(
    () =>
      new Promise((resolve) => {
        setTimeout(() => {
          resolve();
        }, 1000);
      })
  );

  it('Should return xDesktop Firmware notes', (done) => {
    chai
      .request(server)
      .get('/v1/xdesktop/firmware-notes')
      .end((err, res) => {
        res.should.have.status(200);
        const { body } = res;
        should.exist(body);
        body.should.be.a('object');
        body.should.have.property('data');
        body.data.should.be.a('object');
        body.data.should.have.property('firmwareNotes');
        body.data.firmwareNotes.should.be.a('array');
        body.data.firmwareNotes.length.should.above(0);
        done();
      });
  });

  it('Should return xDesktop Firmware note of requested version ', (done) => {
    const version = '2.3.12';
    chai
      .request(server)
      .get(`/v1/xdesktop/firmware-notes/${version}`)
      .end((err, res) => {
        res.should.have.status(200);
        const { body } = res;
        should.exist(body);
        body.should.be.a('object');
        body.should.have.property('data');
        body.data.should.be.a('object');
        body.data.should.have.property('firmwareNote');
        body.data.firmwareNote.should.be.a('object');
        body.data.firmwareNote.should.have.property('ver');
        body.data.firmwareNote.ver.should.be.eql(version);
        done();
      });
  });

  it('Should return Download URL for xDesktop', (done) => {
    const requestBody = {
      emailAddress: 'zaxewebapi@test.com',
      operatingSystem: 'win',
    };

    chai
      .request(server)
      .post('/v1/xdesktop/download')
      .set('Origin', 'https://zaxe.com')
      .send(requestBody)
      .end((err, res) => {
        res.should.have.status(200);
        const { body } = res;
        should.exist(body);
        body.should.be.a('object');
        body.should.have.property('data');
        body.data.should.be.a('object');
        body.data.should.have.property('downloadURL');
        body.data.downloadURL.should.be.a('string');
        body.data.downloadURL.should.match(/^https:\/\/d\.zaxe\.com/);
        done();
      });
  });
});
