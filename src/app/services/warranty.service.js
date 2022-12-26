const FileService = require('./file.service');

const UploadFile = async (file) => {
  try {
    const response = await FileService.UploadFile(file);

    if (response === 'sent') {
      return { status: 'success' };
    }
    return { status: 'error' };
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = { UploadFile };
