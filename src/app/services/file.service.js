const { google } = require('googleapis');
const { Readable } = require('stream');

class FileService {
  constructor() {
    this.googleCredentials = JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT);
    this.authURL = 'https://www.googleapis.com/auth/drive';
    this.auth = new google.auth.JWT(
      this.googleCredentials.client_email,
      null,
      this.googleCredentials.private_key,
      [this.authURL]
    );
    this.GAPI = google.drive({ version: 'v3', auth: this.auth });
    this.uploadFolderID = '1Mj7aW7w3CT3Q_HoWxk3aOHbcRlWwT2Kx';
    this.stream = null;
  }

  bufferToStream(buffer) {
    this.stream = new Readable();
    this.stream.push(buffer);
    this.stream.push(null);

    return this.stream;
  }

  async UploadFile(file) {
    try {
      const { name, type: mimeType, value } = file;
      const buffer = Buffer.from(value.split(';base64,').pop(), 'base64');

      const response = await this.GAPI.files.create({
        resource: {
          name,
          parents: [this.uploadFolderID],
        },
        media: {
          mimeType,
          body: this.bufferToStream(buffer),
        },
        fields: 'id,name',
      });

      if (response.status === 200) {
        return {
          status: 'success',
          fileURL: `https://drive.google.com/file/d/${response.data.id}/view?usp=sharing`,
        };
      }

      throw new Error(response?.error?.message || 'Error uploading file');
    } catch (error) {
      throw new Error(error);
    }
  }
}

module.exports = new FileService();
