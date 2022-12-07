const XDesktopService = require('@/v1/services/xdesktopService');

const getXDesktopFirmwareNotes = async (req, res) => {
  try {
    const firmwareNotes = await XDesktopService.getXDesktopFirmwareNotes();

    res.status(200).send({
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

module.exports = {
  getXDesktopFirmwareNotes,
};
