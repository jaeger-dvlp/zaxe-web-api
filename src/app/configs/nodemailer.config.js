const nodemailer = require('nodemailer');

const getSMTPCredentials = (NODE_ENV) => {
  if (NODE_ENV === 'test') {
    const { host, port, user, pass } = JSON.parse(
      process.env.SMTP_TEST_ACCOUNT
    );

    return nodemailer.createTransport({
      host,
      port,
      auth: {
        user,
        pass,
      },
    });
  }

  if (NODE_ENV !== 'test') {
    const { host, port, user, pass } = JSON.parse(process.env.SMTP_ACCOUNT);

    return nodemailer.createTransport({
      host,
      port,
      secure: true,
      service: 'gmail',
      auth: {
        user,
        pass,
      },
    });
  }

  throw new Error('An error occurred while connecting to SMTP Server.');
};

const SMTP = getSMTPCredentials(process.env.NODE_ENV);

module.exports = SMTP;
