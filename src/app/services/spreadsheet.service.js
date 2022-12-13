const { google } = require('googleapis');

const Schemas = {
  contact: (body) => [
    body?.fullName,
    body?.emailAddress,
    `'${body?.phoneNumber}`,
    body?.heardUsFrom,
    body?.subject,
    body?.message,
  ],
  talktosales: (body) => [
    body?.fullName,
    body?.emailAddress,
    `'${body?.phoneNumber}`,
    body?.autoLocation,
    body?.manualLocation,
    body?.customerType,
    body?.heardUsFrom,
    body?.interestedProducts,
  ],
};

class SpreadsheetService {
  constructor(spreadsheet) {
    this.spreadsheet = spreadsheet;
    this.googleCredentials = JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT);
    this.clientEmail = this.googleCredentials.client_email;
    this.privateKey = this.googleCredentials.private_key;
    this.authURL = 'https://www.googleapis.com/auth/spreadsheets';
    this.spreadsheetID = {
      contact: process.env.SPREADSHEET_CONTACT_ID,
      talktosales: process.env.SPREADSHEET_TALKTOSALES_ID,
    };
    this.range = {
      contact: process.env.SPREADSHEET_CONTACT_RANGE,
      talktosales: process.env.SPREADSHEET_TALKTOSALES_RANGE,
    };
    this.schemas = Schemas;
    this.client = new google.auth.JWT(this.clientEmail, null, this.privateKey, [
      this.authURL,
    ]);
    this.GAPI = null;
  }

  async saveForm(body) {
    try {
      await this.client.authorize();
      this.GAPI = google.sheets({ version: 'v4', auth: this.client });
      const data = [
        '=INDIRECT("A" & ROW()-1)+1',
        new Date().toLocaleString('TR', { timeZone: 'Europe/Istanbul' }),
        ...this.schemas[this.spreadsheet](body),
      ];

      const request = {
        spreadsheetId: this.spreadsheetID[this.spreadsheet],
        range: this.range[this.spreadsheet],
        valueInputOption: 'USER_ENTERED',
        resource: {
          values: [data, []],
        },
      };

      const result = await this.GAPI.spreadsheets.values.append(request);
      if (result.status === 200) {
        return { status: 'success' };
      }
      return { status: 'error' };
    } catch (error) {
      console.log(error);
      return { status: 'error' };
    }
  }
}

module.exports = SpreadsheetService;
