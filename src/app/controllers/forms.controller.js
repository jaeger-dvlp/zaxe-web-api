const NewContactRequest = (req, res) => {
  try {
    //
  } catch (error) {
    res.status(error?.status || 500).send({
      status: 'error',
      message: error?.message || error,
    });
  }
};

module.exports = { NewContactRequest };
