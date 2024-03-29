const express = require('express');
const { PriceController } = require('@/app/controllers');

const router = express.Router();

router.get('/prices', PriceController.getAllPrices);
router.get('/prices/product/:slug', PriceController.getPricesBySlug);
router.get('/prices/category/:slug', PriceController.getPricesByCategory);

module.exports = router;
