const axios = require('axios');

const setrow = axios.create({
  baseURL: 'http://api.setrow.com',
});

module.exports = { setrow };
