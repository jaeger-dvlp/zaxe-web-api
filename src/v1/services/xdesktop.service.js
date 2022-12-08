const path = require('path');
const fs = require('fs');
const ResponseError = require('@/src/utils/ResponseError');

const getFirmwareJSON = () =>
  JSON.parse(
    fs.readFileSync(
      path.join(__dirname, '../../data/xdesktopFirmwareNotes.json'),
      (err, file) => {
        if (err) throw err;
        return file;
      }
    )
  );

const getXDesktopFirmwareNotes = async () => {
  const firmwareNotes = getFirmwareJSON();

  return firmwareNotes;
};

const getXDesktopFirmwareNoteOneVersion = async (version) => {
  const firmwareNotes = getFirmwareJSON();

  const firmwareNote = firmwareNotes.find(({ ver }) => ver === version) || null;

  if (!firmwareNote)
    throw new ResponseError(
      404,
      'Bzzt! Bzzt! No notes found for given version.'
    );

  return firmwareNote;
};

module.exports = {
  getXDesktopFirmwareNotes,
  getXDesktopFirmwareNoteOneVersion,
};
