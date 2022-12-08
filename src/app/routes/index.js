const express = require('express');
const PriceRouter = require('@/app/routes/price.route');
const XDesktopRoute = require('@/app/routes/xdesktop.route.js');
const ResellerRouter = require('@/app/routes/reseller.route.js');

const FormsRouter = require('@/app/routes/forms.route.js');

const router = express.Router();

router.use(PriceRouter, ResellerRouter, XDesktopRoute, FormsRouter);

module.exports = router;
