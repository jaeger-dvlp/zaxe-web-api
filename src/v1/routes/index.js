const express = require('express');
const PriceRouter = require('@/v1/routes/price.route');
const ResellerRouter = require('@/v1/routes/reseller.route.js');

const router = express.Router();

router.use(PriceRouter, ResellerRouter);

module.exports = router;
