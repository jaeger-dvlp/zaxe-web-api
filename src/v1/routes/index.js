const express = require('express');
const PriceRouter = require('@/v1/routes/price.route');
const XDesktopRoute = require('@/v1/routes/xdesktop.route.js');
const ResellerRouter = require('@/v1/routes/reseller.route.js');

const router = express.Router();

router.use(PriceRouter, ResellerRouter, XDesktopRoute);

module.exports = router;
