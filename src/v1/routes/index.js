const express = require('express');
const PriceRouter = require('@/v1/routes/price.route');

const router = express.Router();

router.use(PriceRouter);

module.exports = router;
