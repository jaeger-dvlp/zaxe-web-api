const express = require('express');
const PriceRouter = require('@/app/routes/price.route');
const XDesktopRouter = require('@/app/routes/xdesktop.route');
const ResellerRouter = require('@/app/routes/reseller.route');
const FormsRouter = require('@/app/routes/forms.route.js');
const WarrantyRouter = require('@/app/routes/warranty.route');

const router = express.Router();

router.use(
  PriceRouter,
  ResellerRouter,
  XDesktopRouter,
  FormsRouter,
  WarrantyRouter
);

module.exports = router;
