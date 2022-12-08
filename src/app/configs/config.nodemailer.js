const nodemailer = require('nodemailer');

const {
  SMTP_EMAIL_ADDRESS: host,
  SMTP_EMAIL_PORT: port,
  SMTP_USER_NAME: user,
  SMTP_USER_PASSWORD: pass,
} = process.env;

const SMTP = nodemailer.createTransport({
  host,
  port,
  secure: true,
  service: 'gmail',
  auth: {
    user,
    pass,
  },
});

module.exports = SMTP;
