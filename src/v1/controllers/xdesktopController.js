const XDesktopService = require('@/v1/services/xdesktopService');

const getXDesktopFirmwareNotes = async (req, res) => {
  try {
    const firmwareNotes = await XDesktopService.getXDesktopFirmwareNotes();

    await res.status(200).send({
      status: 'success',
      data: {
        firmwareNotes,
      },
    });
  } catch (error) {
    await res.status(error?.status || 500).send({
      status: 'error',
      message: error?.message || error,
    });
  }
};

const getXDesktopFirmwareNoteOneVersion = async (req, res) => {
  try {
    const { version } = req.params;

    if (!version)
      await res.status(400)({
        status: 'error',
        message: 'Bzzt! Bzzt! Version no is required.',
      });

    const firmwareNote =
      await XDesktopService.getXDesktopFirmwareNoteOneVersion(version);

    await res.status(200).send({
      status: 'success',
      data: {
        firmwareNote,
      },
    });
  } catch (error) {
    await res.status(error?.status || 500).send({
      status: 'error',
      message: error?.message || error,
    });
  }
};

module.exports = {
  getXDesktopFirmwareNotes,
  getXDesktopFirmwareNoteOneVersion,
};
