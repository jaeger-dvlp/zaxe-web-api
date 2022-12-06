const PriceController = require('@/v1/controllers/priceController');
const express = require('express');
const router = express.Router();

router.get('/prices', PriceController.getAllPrices);
router.get('/prices/product/:slug', PriceController.getPricesBySlug);
router.get('/prices/category/:slug', PriceController.getPricesByCategory);

module.exports = router;
