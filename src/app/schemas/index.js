const {
  main: { ContactSchema, TalktosalesSchema, RequestsampleSchema },
  knowledgeBase: { PositiveFeedbackSchema },
} = require('./form.schema');

const { MailSchemas } = require('./mail.schema');

module.exports = {
  MailSchemas,
  main: {
    ContactSchema,
    TalktosalesSchema,
    RequestsampleSchema,
  },
  knowledgeBase: {
    PositiveFeedbackSchema,
  },
};
