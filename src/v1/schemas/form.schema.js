const { checkSchema } = require('express-validator');

const ContactSchema = checkSchema({
  fullName: {
    in: ['body'],
    isString: true,
    isLength: {
      options: { min: 1 },
    },
    errorMessage: 'Full name is required.',
  },
  emailAddress: {
    in: ['body'],
    isEmail: true,
    isLength: { options: { min: 1 } },
    errorMessage: 'Email address is required.',
  },
  phoneNumber: {
    in: ['body'],
    isString: true,
    isLength: {
      options: { min: 1 },
    },
    errorMessage: 'Phone number is required.',
  },
  heardUsFrom: {
    in: ['body'],
    isString: true,
    isLength: {
      options: { min: 1 },
    },
    errorMessage: 'How did you hear about us is required.',
  },
  subject: {
    in: ['body'],
    isString: true,
    isLength: {
      options: { min: 1 },
    },
    errorMessage: 'Subject is required.',
  },
  message: {
    in: ['body'],
    isString: true,
    isLength: {
      options: { min: 1 },
    },
    errorMessage: 'Message is required.',
  },
});

module.exports = { ContactSchema };
