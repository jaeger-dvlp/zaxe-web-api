const path = require('path');
const fs = require('fs');
const CodeError = require('../../utils/CodeError');

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
  const prices = getPriceJSON();
  return prices;
};

const getPricesBySlug = (slug) => {
  const prices = getPriceJSON();
  const price = prices.find((product) => product.slug === slug);
  if (!price) throw new CodeError(404, 'Bzzt! Bzzt! Product not found.');

  return price;
};

const getPricesByCategory = (slug) => {
  const prices = getPriceJSON();
  const price = prices.filter((product) => product.category === slug);
  if (!price || price.length === 0)
    throw new CodeError(404, 'Bzzt! Bzzt! Category not found.');

  return price;
};

module.exports = {
  getAllPrices,
  getPricesBySlug,
  getPricesByCategory,
};
