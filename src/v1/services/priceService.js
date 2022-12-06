const path = require('path');
const fs = require('fs');

const getPriceJSON = () =>
  JSON.parse(
    fs.readFileSync(
      path.join(__dirname, '../../data/prices.json'),
      (err, file) => {
        if (err) throw err;
        return file;
      }
    )
  );

const getAllPrices = () => {
  try {
    const prices = getPriceJSON();
    return prices;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getAllPrices,
};
