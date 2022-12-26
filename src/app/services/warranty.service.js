const FileService = require('./file.service');

const UploadFile = async (file) => {
  try {
    const response = await FileService.UploadFile(file);
    console.log(response);
    if (response?.status === 'success') {
      return { status: 'success', fileURL: response?.fileURL };
    }
    return { status: 'error' };
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = { UploadFile };
