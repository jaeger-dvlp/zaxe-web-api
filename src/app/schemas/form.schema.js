const { checkSchema } = require('express-validator');

const ContactSchema = checkSchema({
  fullName: {
    in: ['body'],
    isString: true,
    isLength: { options: { min: 1 } },
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
    isLength: { options: { min: 1 } },
    errorMessage: 'Phone number is required.',
  },
  heardUsFrom: {
    in: ['body'],
    isString: true,
    isLength: { options: { min: 1 } },
    errorMessage: 'How did you hear about us is required.',
  },
  subject: {
    in: ['body'],
    isString: true,
    isLength: { options: { min: 1 } },
    errorMessage: 'Subject is required.',
  },
  message: {
    in: ['body'],
    isString: true,
    isLength: { soptions: { min: 1 } },
    errorMessage: 'Message is required.',
  },
});

const TalktosalesSchema = checkSchema({
  fullName: {
    in: ['body'],
    isString: true,
    isLength: { options: { min: 1 } },
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
    isLength: { options: { min: 1 } },
    errorMessage: 'Phone number is required.',
  },
  heardUsFrom: {
    in: ['body'],
    isString: true,
    isLength: { options: { min: 1 } },
    errorMessage: 'How did you hear about us is required.',
  },
  manualLocation: {
    in: ['body'],
    isString: true,
    isLength: { options: { min: 1 } },
    errorMessage: 'Location is required.',
  },
  autoLocation: {
    in: ['body'],
    isString: true,
    optional: true,
  },
  customerType: {
    in: ['body'],
    isString: true,
    isLength: { options: { min: 1 } },
    errorMessage: 'Customer type is required.',
  },
  interestedProducts: {
    in: ['body'],
    isString: true,
    isLength: { options: { min: 1 } },
    errorMessage: 'Products are required.',
  },
});

const RequestsampleSchema = checkSchema({
  fullName: {
    in: ['body'],
    isString: true,
    isLength: { options: { min: 1 } },
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
    isLength: { options: { min: 1 } },
    errorMessage: 'Phone number is required.',
  },
  companyName: {
    in: ['body'],
    isString: true,
    isLength: { options: { min: 1 } },
    errorMessage: 'Company name is required.',
  },
  fullAddress: {
    in: ['body'],
    isString: true,
    isLength: { options: { min: 1 } },
    errorMessage: 'Address is required.',
  },
  city: {
    in: ['body'],
    isString: true,
    isLength: { options: { min: 1 } },
    errorMessage: 'City is required.',
  },
  country: {
    in: ['body'],
    isString: true,
    isLength: { options: { min: 1 } },
    errorMessage: 'Country is required.',
  },
  layerHeight: {
    in: ['body'],
    isString: true,
    isLength: { options: { min: 1 } },
    errorMessage: 'Layer height is required.',
  },
  fillDensity: {
    in: ['body'],
    isString: true,
    isLength: { options: { min: 1 } },
    errorMessage: 'Fill density is required.',
  },
  message: {
    in: ['body'],
    isString: true,
    isLength: { options: { min: 1 } },
    errorMessage: 'Message is required.',
  },
  file: {
    in: ['body'],
    isObject: true,
    errorMessage: 'File is required.',
  },
  'file.name': {
    in: ['body'],
    isString: true,
    isLength: { options: { min: 1 } },
    custom: {
      options: (value) => {
        if (value) {
          const extension = value.slice(-3).toLowerCase();
          if (extension === 'stl') {
            return true;
          }
        }
        return false;
      },
    },
    errorMessage: 'File name is invalid or empty.',
  },
  'file.type': {
    in: ['body'],
    isString: true,
    equals: { options: ['base64'], errorMessage: 'File type is invalid.' },
    errorMessage: 'File type is invalid or empty.',
  },
  'file.value': {
    in: ['body'],
    isString: true,
    isLength: { options: { min: 1 } },
    errorMessage: 'File value is invalid or empty.',
  },
});

module.exports = { ContactSchema, TalktosalesSchema, RequestsampleSchema };
