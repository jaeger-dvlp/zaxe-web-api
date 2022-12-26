const WarrantyService = require('@/app/services/warranty.service');

const UploadFile = async (req, res) => {
  const {
    body: { file },
  } = req;
  try {
    const response = await WarrantyService.UploadFile(file);
    if (response?.status === 'success') {
      return res.status(200).send({
        status: 'success',
        message: 'File has been uploaded successfully.',
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

module.exports = { UploadFile };
