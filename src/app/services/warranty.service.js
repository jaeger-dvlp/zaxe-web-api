const FileService = require('./file.service');
const { SendMail } = require('@/src/utils/SendMail');

const UploadFile = async (file) => {
  try {
    const response = await FileService.UploadFile(file);
    if (response?.status === 'success') {
      return { status: 'success', fileURL: response?.fileURL };
    }
    return { status: 'error' };
  } catch (error) {
    throw new Error(error);
  }
};

const WarrantyRegistration = async (body) => {
  try {
    const responseAdmin = await SendMail('warranty.apply.admin', body);
    const responseUser = await SendMail('warranty.apply.user', body);

    if (responseAdmin === 'sent' && responseUser === 'sent') {
      return { status: 'sent' };
    }
    return { status: 'error' };
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = { UploadFile, WarrantyRegistration };
