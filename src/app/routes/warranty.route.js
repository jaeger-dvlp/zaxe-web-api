const express = require('express');

const CustomCORS = require('@/app/middlewares/cors');
const WarrantyController = require('@/app/controllers/warranty.controller');

const router = express.Router();

router.post('/warranty/upload', CustomCORS, WarrantyController.UploadFile);

module.exports = router;
