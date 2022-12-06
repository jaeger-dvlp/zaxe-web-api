const PriceRouter = require('./price.route');
const express = require('express');
const router = express.Router();

router.use(PriceRouter);

module.exports = router;
