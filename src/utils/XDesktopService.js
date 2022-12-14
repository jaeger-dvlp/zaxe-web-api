const axios = require('axios');

class XDesktopService {
  constructor() {
    this.downloadURL = 'https://software.zaxe.com/xdesktop.json';
    this.versions = {
      win: null,
      darwin: null,
    };
  }

  async download() {
    try {
      const { data } = await axios.get(this.downloadURL);
      const {
        xdesktop: { Windows, Darwin },
      } = data;
      this.versions.win = Windows;
      this.versions.darwin = Darwin;

      const { versions } = this;

      return {
        status: 'success',
        data: { versions },
      };
    } catch (error) {
      console.log(error);
      return { status: 'error' };
    }
  }
}

module.exports = { XDesktopService };
