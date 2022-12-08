const express = require('express');
const XDesktopController = require('@/v1/controllers/xdesktop.controller');

const router = express.Router();

router.get(
  '/xdesktop/firmware-notes',
  XDesktopController.getXDesktopFirmwareNotes
);

router.get(
  '/xdesktop/firmware-notes/:version',
  XDesktopController.getXDesktopFirmwareNoteOneVersion
);

module.exports = router;
