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

const {
  NODE_ENV,
  SPREADSHEET_TEST_CONTACT_RANGE,
  SPREADSHEET_TEST_TALKTOSALES_RANGE,
  SPREADSHEET_CONTACT_RANGE,
  SPREADSHEET_TALKTOSALES_RANGE,
} = process.env;

const getSheetRange = () => {
  if (NODE_ENV === 'test') {
    return {
      contact: SPREADSHEET_TEST_CONTACT_RANGE,
      talktosales: SPREADSHEET_TEST_TALKTOSALES_RANGE,
    };
  }
  return {
    contact: SPREADSHEET_CONTACT_RANGE,
    talktosales: SPREADSHEET_TALKTOSALES_RANGE,
  };
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
    this.range = getSheetRange();
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
