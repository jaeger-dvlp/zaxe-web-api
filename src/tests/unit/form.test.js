process.env.NODE_ENV = 'test';
process.env.PORT = 3010;

const fs = require('fs');
const path = require('path');
const chai = require('chai');
const chaiHttp = require('chai-http');

const should = chai.should();
const server = require('../../server');

chai.use(chaiHttp);

const getDemoSTL = async () => {
  const file = fs.readFileSync(
    path.join(__dirname, '../../data/demo.stl.base64'),
    'utf8'
  );

  return file;
};

const getDemoResume = async () => {
  const file = fs.readFileSync(
    path.join(__dirname, '../../data/demo.resume.base64'),
    'utf8'
  );

  return file;
};

describe('Forms Endpoint:', () => {
  beforeEach(
    () =>
      new Promise((resolve) => {
        setTimeout(() => {
          resolve();
        }, 1000);
      })
  );

  it('Should subscribe successfully', (done) => {
    const requestBody = {
      emailAddress: 'webdev@zaxe.com',
    };
    const successfullResponses = [
      'E-mail subscribed successfully.',
      'E-mail already subscribed.',
    ];

    chai
      .request(server)
      .post('/v1/forms/subscribe')
      .set('Origin', 'https://zaxe.com')
      .send(requestBody)
      .then((res) => {
        const {
          body: { message },
        } = res;

        should.exist(message);
        message.should.be.oneOf(successfullResponses);
        done();
      });
  });

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
      .then((res) => {
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
      .then((res) => {
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

  it('Should send a Sample Request Form', async () => {
    return getDemoSTL().then(async (file) => {
      const requestBody = {
        fullName: 'Web Dev Testing',
        emailAddress: 'webdev@zaxe.com',
        phoneNumber: '+90 537 817 4972',
        companyName: 'Zaxe 3D Printing Technologies',
        fullAddress: 'Yesilce, Secilmis Sk. / Kagithane / Istanbul / No 2',
        city: 'Istanbul',
        country: 'Turkey',
        layerHeight: '1mm',
        fillDensity: '30%',
        message: 'Could you print this sample please? Thanks!',
        file: {
          name: 'webdevKeychain.stl',
          type: 'base64',
          value: file,
        },
      };

      await chai
        .request(server)
        .post('/v1/forms/requestsample')
        .set('Origin', 'https://zaxe.com')
        .send(requestBody)
        .then((res) => {
          const {
            body: { message },
          } = res;
          should.exist(message);
          message.should.be.eql(
            'Request Sample request has been sent successfully.'
          );
        });
    });
  }).timeout(25000);

  it('Should send a Positive Feedback', (done) => {
    const requestBody = {
      article: {
        title: 'Know Your Zaxe Z3 3D Printer',
        url: 'https://learn.zaxe.com/products/3dprinters/zaxe-z3/article/know-your-zaxe-z3-3d-printer',
        language: 'en',
      },
    };

    chai
      .request(server)
      .post('/v1/forms/kb/feedback/positive')
      .set('Origin', 'https://zaxe.com')
      .send(requestBody)
      .then((res) => {
        const {
          body: { message },
        } = res;

        should.exist(message);
        message.should.be.eql('Feedback has been sent successfully.');
        done();
      });
  });

  it('Should send a Feedback', (done) => {
    const requestBody = {
      fullName: 'Web Dev',
      emailAddress: 'webdev@zaxe.com',
      message: 'CI Testing purpose..',
      article: {
        title: 'Know Your Zaxe Z3 3D Printer',
        url: 'https://learn.zaxe.com/products/3dprinters/zaxe-z3/article/know-your-zaxe-z3-3d-printer',
        language: 'en',
      },
    };

    chai
      .request(server)
      .post('/v1/forms/kb/feedback/')
      .set('Origin', 'https://zaxe.com')
      .send(requestBody)
      .then((res) => {
        const {
          body: { message },
        } = res;

        should.exist(message);
        message.should.be.eql('Feedback has been sent successfully.');
        done();
      });
  });

  it('Should send a Career Application with a attached PDF', async () => {
    return getDemoResume().then(async (resumeFile) => {
      const requestBody = {
        person: {
          fullName: 'Web Dev Testing',
          emailAddress: 'webdev@zaxe.com',
          phoneNumber: '+90 532 323 32 32',
          fullAddress: 'Yesilce, Secilmis Sk. / Kagithane / Istanbul / No 2',
          githubURL: 'https://github.com/jaeger-dvlp',
          linkedinURL: '',
          portfolioURL: 'https://jaeger-dvlp.dev',
          behanceURL: '',
          coverLetter: 'CI Testing, cover letter.',
          legallyEligible: 'yes',
          eligibilityBasedOnWorkVisa: 'no',
          resume: {
            type: 'base64',
            name: 'webdevResume.pdf',
            value: resumeFile,
            url: '',
          },
        },
        role: {
          id: '010101',
          title: 'Software Developer',
          team: 'Development',
          location: 'Istanbul',
          type: 'Remote',
        },
      };

      await chai
        .request(server)
        .post('/v1/forms/careers/apply')
        .set('Origin', 'https://careers.zaxe.com')
        .send(requestBody)
        .then((res) => {
          const {
            body: { message },
          } = res;
          should.exist(message);
          message.should.be.eql('Application has been sent successfully.');
        });
    });
  }).timeout(25000);

  it('Should send a Career Application with a Drive Link', (done) => {
    const requestBody = {
      person: {
        fullName: 'Web Dev Testing',
        emailAddress: 'webdev@zaxe.com',
        phoneNumber: '+90 532 323 32 32',
        fullAddress: 'Yesilce, Secilmis Sk. / Kagithane / Istanbul / No 2',
        githubURL: 'https://github.com/jaeger-dvlp',
        linkedinURL: '',
        portfolioURL: 'https://jaeger-dvlp.dev',
        behanceURL: '',
        coverLetter: 'CI Testing, cover letter.',
        legallyEligible: 'yes',
        eligibilityBasedOnWorkVisa: 'no',
        resume: {
          type: 'drive',
          name: 'webdevResume.pdf',
          value: '',
          url: 'https://docs.google.com/document/d/1RrL3hnZS8I6QgOLMZod-UqrYJYKNx6oI5qC1LjE9CL4/edit?usp=sharing',
        },
      },
      role: {
        id: '010101',
        title: 'Software Developer',
        team: 'Development',
        location: 'Istanbul',
        type: 'Remote',
      },
    };

    chai
      .request(server)
      .post('/v1/forms/careers/apply')
      .set('Origin', 'https://careers.zaxe.com')
      .send(requestBody)
      .then((res) => {
        const {
          body: { message },
        } = res;
        should.exist(message);
        message.should.be.eql('Application has been sent successfully.');
        done();
      });
  }).timeout(25000);
});
