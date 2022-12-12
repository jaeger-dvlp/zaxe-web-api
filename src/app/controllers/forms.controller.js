const { FormService } = require('@/app/services/');

const NewContactRequest = async (req, res) => {
  try {
    const { body } = req;
    const response = await FormService.NewContactRequest(body);
    if (response?.status === 'sent') {
      return res.status(200).send({
        status: 'success',
        message: 'Contact request has been sent successfully.',
      });
    }
    return res.status(500).send({
      status: 'error',
      message: 'Something went wrong, please try again later.',
    });
  } catch (error) {
    return res.status(error?.status || 500).send({
      status: 'error',
      message: error?.message || error,
    });
  }
};

const NewTalkToSalesRequest = async (req, res) => {
  try {
    const { body } = req;
    const response = await FormService.NewTalkToSalesRequest(body);
    if (response?.status === 'sent') {
      return res.status(200).send({
        status: 'success',
        message: 'Talk to Sales request has been sent successfully.',
      });
    }
    return res.status(500).send({
      status: 'error',
      message: 'Something went wrong, please try again later.',
    });
  } catch (error) {
    return res.status(error?.status || 500).send({
      status: 'error',
      message: error?.message || error,
    });
  }
};

module.exports = { NewContactRequest, NewTalkToSalesRequest };
