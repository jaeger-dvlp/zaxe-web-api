const { SendMail } = require('../../utils/SendMail');

const NewContactRequest = async (body) => {
  try {
    const responseAdmin = await SendMail('main.contact.admin', body);
    const responseUser = await SendMail('main.contact.user', body);

    if (responseUser === 'sent' && responseAdmin === 'sent') {
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
      return { status: 'sent' };
    }
    return { status: 'error' };
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = { NewContactRequest, NewTalkToSalesRequest };
