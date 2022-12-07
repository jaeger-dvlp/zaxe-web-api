const path = require('path');
const fs = require('fs');

const getXDesktopFirmwareNotes = async () => {
  const firmwareNotes = await JSON.parse(
    fs.readFileSync(
      path.join(__dirname, '../../data/xdesktopFirmwareNotes.json'),
      (err, file) => {
        if (err) throw err;
        return file;
      }
    )
  );

  return firmwareNotes;
};

module.exports = {
  getXDesktopFirmwareNotes,
};
