const path = require('path');
const fs = require('fs');

const getResellerJSON = () =>
  JSON.parse(
    fs.readFileSync(
      path.join(__dirname, '../../data/resellers.json'),
      (err, file) => {
        if (err) throw err;
        return file;
      }
    )
  );

const getAllResellers = async () => {
  const resellers = getResellerJSON();
  return resellers;
};

module.exports = {
  getAllResellers,
};
