const express = require('express');

const CustomCORS = require('@/app/middlewares/cors');
const Validator = require('@/app/middlewares/validator');
const { XDesktopController } = require('@/app/controllers');
const RateLimiter = require('@/app/middlewares/rate-limiter');

const {
  xdesktop: { DownloadXDesktopSchema },
} = require('@/app/schemas');

const router = express.Router();

router.use('/xdesktop/download', CustomCORS, RateLimiter(5));

router.post(
  '/xdesktop/download',
  [DownloadXDesktopSchema, Validator],
  XDesktopController.downloadXDesktop
);

router.get(
  '/xdesktop/firmware-notes',
  XDesktopController.getXDesktopFirmwareNotes
);

router.get(
  '/xdesktop/firmware-notes/:version',
  XDesktopController.getXDesktopFirmwareNoteOneVersion
);

module.exports = router;
