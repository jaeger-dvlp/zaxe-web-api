const { checkSchema } = require('express-validator');

const invoiceImageTypes = ['image/png', 'image/jpeg', 'image/jpg'];

const UploadSchema = checkSchema({
  name: {
    in: ['body'],
    isString: true,
    isLength: {
      options: { min: 1 },
    },
  },
  surname: {
    in: ['body'],
    isString: true,
    isLength: {
      options: { min: 1 },
    },
  },
  purchaseDate: {
    in: ['body'],
    isString: true,
    isLength: {
      options: { min: 1 },
    },
  },
  deviceSerialNumber: {
    in: ['body'],
    isString: true,
    isLength: {
      options: { min: 5 },
    },
  },
  emailAddress: {
    in: ['body'],
    isString: true,
    isEmail: true,
    isLength: {
      options: { min: 1 },
    },
  },
  phoneNumber: {
    in: ['body'],
    isString: true,
    isLength: {
      options: { min: 1 },
    },
  },
  country: {
    in: ['body'],
    isString: true,
    isLength: {
      options: { min: 1 },
    },
  },
  companyName: {
    in: ['body'],
    isString: true,
    isLength: {
      options: { min: 1 },
    },
  },
  distributorName: {
    in: ['body'],
    isString: true,

    isLength: {
      options: { min: 1 },
    },
  },
  invoiceImage: {
    in: ['body'],
    isObject: true,
  },
  'invoiceImage.name': {
    in: ['body'],
    isString: true,
    isLength: {
      options: { min: 1 },
    },
  },
  'invoiceImage.value': {
    in: ['body'],
    isString: true,
    isLength: {
      options: { min: 1 },
    },
  },
  'invoiceImage.type': {
    in: ['body'],
    isString: true,
    custom: {
      options: (value) => invoiceImageTypes.includes(value),
    },
    isLength: {
      options: { min: 1 },
    },
  },
});

module.exports = { UploadSchema };
