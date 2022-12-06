const PriceController = require('@/v1/controllers/priceController');
const express = require('express');
const router = express.Router();

router.get('/prices', PriceController.getAllPrices);

module.exports = router;
