const express = require('express');
const PriceController = require('@/v1/controllers/price.controller');

const router = express.Router();

router.get('/prices', PriceController.getAllPrices);
router.get('/prices/product/:slug', PriceController.getPricesBySlug);
router.get('/prices/category/:slug', PriceController.getPricesByCategory);

module.exports = router;
