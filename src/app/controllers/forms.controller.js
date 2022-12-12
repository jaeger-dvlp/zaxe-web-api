const { FormService } = require('@/app/services/');

const NewContactRequest = async (req, res) => {
  try {
    const { body } = req;
    const response = await FormService.main.NewContactRequest(body);
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
    const response = await FormService.main.NewTalkToSalesRequest(body);
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

const NewRequestSampleRequest = async (req, res) => {
  try {
    const { body } = req;
    const response = await FormService.main.NewRequestSampleRequest(body);

    if (response?.status === 'sent') {
      return res.status(200).send({
        status: 'success',
        message: 'Request Sample request has been sent successfully.',
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

const NewPositiveFeedback = async (req, res) => {
  try {
    const { article } = req.body;
    const response = await FormService.knowledgeBase.NewPositiveFeedback(
      article
    );

    if (response?.status === 'sent') {
      return res.status(200).send({
        status: 'success',
        message: 'Feedback has been sent successfully.',
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

const NewFeedback = async (req, res) => {
  try {
    const { body } = req;
    const response = await FormService.knowledgeBase.NewFeedback(body);

    if (response?.status === 'sent') {
      return res.status(200).send({
        status: 'success',
        message: 'Feedback has been sent successfully.',
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

module.exports = {
  main: {
    NewContactRequest,
    NewTalkToSalesRequest,
    NewRequestSampleRequest,
  },
  knowledgeBase: {
    NewPositiveFeedback,
    NewFeedback,
  },
};
