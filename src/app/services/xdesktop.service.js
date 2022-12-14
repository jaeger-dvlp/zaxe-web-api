const path = require('path');
const fs = require('fs');

const ResponseError = require('@/src/utils/ResponseError');
const { SubscribeService } = require('@/src/utils/SubscribeMail');
const { XDesktopService } = require('@/src/utils/XDesktopService');

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

const downloadXDesktop = async (body) => {
  try {
    const { SETROW_API_XDESKTOP_GROUP_ID } = process.env;
    const { emailAddress, operatingSystem } = body;
    const xdesktopService = new XDesktopService();
    const {
      status,
      data: { versions },
    } = await xdesktopService.download();
    const requestedVersion = versions?.[operatingSystem] || null;

    if (status !== 'success') {
      throw new ResponseError(500, 'Bzzt! Bzzt! Something went wrong.');
    }

    if (!requestedVersion) {
      throw new ResponseError(
        404,
        'Bzzt! Bzzt! No version found for given OS.'
      );
    }

    const subscribeService = new SubscribeService(SETROW_API_XDESKTOP_GROUP_ID);
    const SubResult = await subscribeService.subscribe(emailAddress, {
      oalan1: `OS : ${operatingSystem} / VER : ${requestedVersion.major}.${requestedVersion.minor}.${requestedVersion.revision}`,
    });

    if (SubResult?.status === 'error') {
      throw new ResponseError(500, 'Bzzt! Bzzt! Something went wrong.');
    }

    return requestedVersion.url;
  } catch (error) {
    throw new Error(error);
  }
};

const getXDesktopFirmwareNotes = async () => {
  const firmwareNotes = getFirmwareJSON();

  return firmwareNotes;
};

const getXDesktopFirmwareNoteOneVersion = async (version) => {
  const firmwareNotes = getFirmwareJSON();

  const firmwareNote = firmwareNotes.find(({ ver }) => ver === version) || null;

  if (!firmwareNote) {
    throw new ResponseError(
      404,
      'Bzzt! Bzzt! No notes found for given version.'
    );
  }

  return firmwareNote;
};

module.exports = {
  downloadXDesktop,
  getXDesktopFirmwareNotes,
  getXDesktopFirmwareNoteOneVersion,
};
