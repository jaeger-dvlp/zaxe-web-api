process.env.NODE_ENV = 'test';
process.env.PORT = 3010;

const chai = require('chai');
const chaiHttp = require('chai-http');

const should = chai.should();
const server = require('../../server');

chai.use(chaiHttp);

describe('Forms Endpoint:', () => {
  it('Should send a Contact Form', (done) => {
    const requestBody = {
      fullName: 'Web Dev Testing',
      emailAddress: 'webdev@zaxe.com',
      phoneNumber: '+90 537 817 4972',
      heardUsFrom: 'Website',
      subject: 'CI Test',
      message: 'CI Testing purpose..',
    };

    chai
      .request(server)
      .post('/v1/forms/contact')
      .set('Origin', 'https://zaxe.com')
      .send(requestBody)
      .end((err, res) => {
        res.should.have.status(200);
        const {
          body: { message },
        } = res;
        should.exist(message);
        message.should.be.eql('Contact request has been sent successfully.');
        done();
      });
  });

  it('Should send a Talk to Sales Form', (done) => {
    const requestBody = {
      fullName: 'Web Dev Testing',
      emailAddress: 'webdev@zaxe.com',
      phoneNumber: '+90 537 817 4972',
      heardUsFrom: 'Website',
      manualLocation: 'Ankara / Turkey',
      autoLocation: 'Istanbul / Turkey',
      customerType: 'Reseller',
      interestedProducts: '3D Printers, Filaments',
    };

    chai
      .request(server)
      .post('/v1/forms/talktosales')
      .set('Origin', 'https://zaxe.com')
      .send(requestBody)
      .end((err, res) => {
        const {
          body: { message },
        } = res;

        should.exist(message);
        message.should.be.eql(
          'Talk to Sales request has been sent successfully.'
        );
        done();
      });
  });
});
