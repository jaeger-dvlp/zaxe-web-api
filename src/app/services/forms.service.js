const { SendMail } = require('@/src/utils/SendMail');
const SpreadsheetService = require('./spreadsheet.service');
const { SubscribeService } = require('@/src/utils/SubscribeMail');

const NewSubscriber = async (body) => {
  try {
    const { emailAddress } = body;
    const { SETROW_API_WEB_GROUP_ID } = process.env;

    const subscribeService = new SubscribeService(SETROW_API_WEB_GROUP_ID);
    const response = await subscribeService.subscribe(emailAddress);

    return { status: response?.status || 'error' };
  } catch (error) {
    throw new Error(error);
  }
};

const NewContactRequest = async (body) => {
  try {
    const responseAdmin = await SendMail('main.contact.admin', body);
    const responseUser = await SendMail('main.contact.user', body);

    if (responseUser === 'sent' && responseAdmin === 'sent') {
      const spreadsheet = new SpreadsheetService('contact');
      spreadsheet.saveForm(body);
      return { status: 'sent' };
    }
    return { status: 'error' };
  } catch (error) {
    throw new Error(error);
  }
};

const NewTalkToSalesRequest = async (body) => {
  try {
    const responseAdmin = await SendMail('main.talktosales.admin', body);
    const responseUser = await SendMail('main.talktosales.user', body);

    if (responseUser === 'sent' && responseAdmin === 'sent') {
      const spreadsheet = new SpreadsheetService('talktosales');
      spreadsheet.saveForm(body);
      return { status: 'sent' };
    }
    return { status: 'error' };
  } catch (error) {
    throw new Error(error);
  }
};

const NewSampleRequest = async (body) => {
  try {
    const responseAdmin = await SendMail('main.requestsample.admin', body);
    const responseUser = await SendMail('main.requestsample.user', body);

    if (responseAdmin === 'sent' && responseUser === 'sent') {
      return { status: 'sent' };
    }
    return { status: 'error' };
  } catch (error) {
    throw new Error(error);
  }
};

const NewPositiveFeedback = async (body) => {
  try {
    const response = await SendMail('knowledgebase.fb.positive', body);

    if (response === 'sent') {
      return { status: 'sent' };
    }
    return { status: 'error' };
  } catch (error) {
    throw new Error(error);
  }
};

const NewFeedback = async (body) => {
  try {
    const responseUser = await SendMail('knowledgebase.fb.user', body);
    const responseAdmin = await SendMail('knowledgebase.fb.admin', body);

    if (responseUser === 'sent' && responseAdmin === 'sent') {
      return { status: 'sent' };
    }
    return { status: 'error' };
  } catch (error) {
    throw new Error(error);
  }
};

const NewApplication = async (body) => {
  try {
    const responseUser = await SendMail('careers.apply.user', body);
    const responseAdmin = await SendMail('careers.apply.admin', body);

    if (responseUser === 'sent' && responseAdmin === 'sent') {
      return { status: 'sent' };
    }
    return { status: 'error' };
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = {
  main: {
    NewSubscriber,
    NewContactRequest,
    NewTalkToSalesRequest,
    NewSampleRequest,
  },
  knowledgeBase: {
    NewPositiveFeedback,
    NewFeedback,
  },
  careers: {
    NewApplication,
  },
};
