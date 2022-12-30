const WarrantyService = require('@/app/services/warranty.service');

const UploadFile = async (req, res) => {
  try {
    const {
      body: { invoiceImage: file },
    } = req;
    const { status, fileURL } = await WarrantyService.UploadFile(file);
    if (status === 'success') {
      return await res.status(200).send({
        status: 'success',
        message: 'File has been uploaded successfully.',
        data: {
          fileURL,
        },
      });
    }
    return await res.status(500).send({
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

const WarrantyRegistration = async (req, res) => {
  try {
    const { body } = req;
    const { status } = await WarrantyService.WarrantyRegistration(body);
    if (status === 'sent') {
      return await res.status(200).send({
        status: 'success',
        message: 'Warranty registration has been sent successfully.',
      });
    }
    return await res.status(500).send({
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

module.exports = { UploadFile, WarrantyRegistration };
