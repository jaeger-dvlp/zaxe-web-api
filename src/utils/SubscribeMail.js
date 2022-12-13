const { setrow } = require('@/app/configs/setrow.config');

const responses = {
  B1: 'success',
  H3: 'duplicate',
};

class SubscribeService {
  constructor(groupID) {
    this.groupID = groupID;
    this.endpoint = 'adres_ekle';
    this.privateKey = process.env.SETROW_API_PRIVATE_KEY;
  }

  async subscribe(emailAddress, additionalParams) {
    try {
      const params = {
        adres: emailAddress,
        grupid: this.groupID,
        t: 6,
        i: this.endpoint,
        k: this.privateKey,
        ...additionalParams,
      };

      // ? Yep, setrow is a little bit weird. :D
      const result = await setrow.get('/V1/api_V2.php', { params });

      return { status: responses[result.data['Sonuç']] || 'error' };
    } catch (error) {
      console.log(error);
      return { status: 'error' };
    }
  }
}

module.exports = { SubscribeService };
