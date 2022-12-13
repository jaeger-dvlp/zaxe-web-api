const { checkSchema } = require('express-validator');

const HandleCareerSocialURL = {
  options: (value) => {
    if (value) {
      return value;
    }
    return 'Empty or not available for this position';
  },
};

const SubscribeSchema = checkSchema({
  emailAddress: {
    in: ['body'],
    isEmail: true,
    isLength: {
      options: { min: 5, max: 100 },
    },
  },
});

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

const PositiveFeedbackSchema = checkSchema({
  article: {
    in: ['body'],
    isObject: true,
    errorMessage: 'Article is required.',
  },
  'article.title': {
    in: ['body'],
    isString: true,
    isLength: { options: { min: 1 } },
    errorMessage: 'Article title is required.',
  },
  'article.url': {
    in: ['body'],
    isString: true,
    isLength: { options: { min: 1 } },
    errorMessage: 'Article url is required.',
  },
  'article.language': {
    in: ['body'],
    isString: true,
    isLength: { options: { min: 1 } },
    errorMessage: 'Article language is required.',
  },
});

const FeedbackSchema = checkSchema({
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
  message: {
    in: ['body'],
    isString: true,
    isLength: { options: { min: 1 } },
    errorMessage: 'Message is required.',
  },
  article: {
    in: ['body'],
    isObject: true,
    errorMessage: 'Article is required.',
  },
  'article.title': {
    in: ['body'],
    isString: true,
    isLength: { options: { min: 1 } },
    errorMessage: 'Article title is required.',
  },
  'article.url': {
    in: ['body'],
    isString: true,
    isLength: { options: { min: 1 } },
    errorMessage: 'Article url is required.',
  },
  'article.language': {
    in: ['body'],
    isString: true,
    isLength: { options: { min: 1 } },
    errorMessage: 'Article language is required.',
  },
});

const ApplicationSchema = checkSchema({
  person: {
    in: ['body'],
    isObject: true,
    errorMessage: 'Person is required.',
  },
  'person.fullName': {
    in: ['body'],
    isString: true,
    isLength: { options: { min: 1 } },
    errorMessage: 'Full name is required.',
  },
  'person.emailAddress': {
    in: ['body'],
    isEmail: true,
    isLength: { options: { min: 1 } },
    errorMessage: 'Email address is required.',
  },
  'person.phoneNumber': {
    in: ['body'],
    isString: true,
    isLength: { options: { min: 1 } },
    errorMessage: 'Phone number is required.',
  },
  'person.fullAddress': {
    in: ['body'],
    isString: true,
    isLength: { options: { min: 1 } },
    errorMessage: 'Address is required.',
  },
  'person.githubURL': {
    in: ['body'],
    isString: true,
    optional: true,
    customSanitizer: HandleCareerSocialURL,
  },
  'person.linkedinURL': {
    in: ['body'],
    isString: true,
    optional: true,
    customSanitizer: HandleCareerSocialURL,
  },
  'person.portfolioURL': {
    in: ['body'],
    isString: true,
    optional: true,
    customSanitizer: HandleCareerSocialURL,
  },
  'person.behanceURL': {
    in: ['body'],
    isString: true,
    optional: true,
    customSanitizer: HandleCareerSocialURL,
  },
  'person.coverLetter': {
    in: ['body'],
    isString: true,
    isLength: { options: { min: 1 } },
    errorMessage: 'Cover letter is required.',
  },
  'person.legallyEligible': {
    in: ['body'],
    isString: true,
    isLength: { options: { min: 1 } },
    errorMessage: 'Legally eligible is required.',
  },
  'person.eligibilityBasedOnWorkVisa': {
    in: ['body'],
    isString: true,
    isLength: { options: { min: 1 } },
    errorMessage: 'Eligibilty based on work visa is required.',
  },
  'person.resume': {
    in: ['body'],
    isObject: true,
    errorMessage: 'Resume is required.',
  },
  'person.resume.type': {
    in: ['body'],
    isString: true,
    custom: {
      options: (value) => {
        if (value === 'base64' || value === 'drive') {
          return true;
        }

        return false;
      },
    },
    isLength: { options: { min: 1 } },
    errorMessage: 'File type is invalid or empty.',
  },
  'person.resume.name': {
    in: ['body'],
    isString: true,
    isLength: { options: { min: 1 } },
    custom: {
      options: (value) => {
        if (value) {
          const extension = value.slice(-3).toLowerCase();
          if (extension === 'pdf') {
            return true;
          }
        }
        return Promise.reject(
          new Error('File type is invalid or name is empty.')
        );
      },
    },
  },
  'person.resume.value': {
    in: ['body'],
    isString: true,
    custom: {
      options: (value, { req }) => {
        if (req.body.person.resume.type === 'base64') {
          if (!value?.length > 0) {
            return Promise.reject(new Error('File value is invalid or empty.'));
          }
        }

        if (req.body.person.resume.type === 'drive') {
          if (value?.length > 0) {
            return Promise.reject(
              new Error('File Value cannot be set for drive files.')
            );
          }
        }

        return true;
      },
    },
  },
  'person.resume.url': {
    in: ['body'],
    isString: true,
    custom: {
      options: (value, { req }) => {
        if (req.body.person.resume.type === 'drive') {
          if (value?.length <= 0) {
            return Promise.reject(new Error('File URL is invalid or empty.'));
          }
        }

        if (req.body.person.resume.type === 'base64') {
          if (value?.length > 0) {
            return Promise.reject(
              new Error('File URL cannot be set for base64 files.')
            );
          }
        }

        return true;
      },
    },
  },
  role: {
    in: ['body'],
    isObject: true,
    errorMessage: 'Role is required.',
  },
  'role.id': {
    in: ['body'],
    isString: true,
    isLength: { options: { min: 1 } },
    errorMessage: 'Role id is required.',
  },
  'role.title': {
    in: ['body'],
    isString: true,
    isLength: { options: { min: 1 } },
    errorMessage: 'Role title is required.',
  },
  'role.team': {
    in: ['body'],
    isString: true,
    isLength: { options: { min: 1 } },
    errorMessage: 'Role team is required.',
  },
  'role.location': {
    in: ['body'],
    isString: true,
    isLength: { options: { min: 1 } },
    errorMessage: 'Role location is required.',
  },
  'role.type': {
    in: ['body'],
    isString: true,
    isLength: { options: { min: 1 } },
    errorMessage: 'Role type is required.',
  },
});

module.exports = {
  main: {
    SubscribeSchema,
    ContactSchema,
    TalktosalesSchema,
    RequestsampleSchema,
  },
  knowledgeBase: {
    PositiveFeedbackSchema,
    FeedbackSchema,
  },
  careers: {
    ApplicationSchema,
  },
};
