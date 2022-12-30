const express = require('express');

const CustomCORS = require('@/app/middlewares/cors');
const Validator = require('@/app/middlewares/validator');
const { WarrantySchema } = require('@/app/schemas');
const WarrantyController = require('@/app/controllers/warranty.controller');

const router = express.Router();

router.use('/warranty', CustomCORS);

router.post(
  '/warranty/upload',
  [WarrantySchema.UploadSchema, Validator],
  WarrantyController.UploadFile
);

router.post(
  '/warranty/register',
  [WarrantySchema.RegisterSchema, Validator],
  WarrantyController.WarrantyRegistration
);

module.exports = router;
