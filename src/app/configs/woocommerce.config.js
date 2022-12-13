const WCAPI = require('woocommerce-api');

const {
  WOOCOMMERCE_API_URL: url,
  WOOCOMMERCE_API_CONSUMER_KEY: consumerKey,
  WOOCOMMERCE_API_CONSUMER_SECRET_KEY: consumerSecret,
} = process.env;

const wc = new WCAPI({
  url,
  consumerKey,
  consumerSecret,
  wpAPI: true,
  version: 'wc/v3',
});

module.exports = wc;
