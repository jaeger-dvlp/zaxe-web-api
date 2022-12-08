const express = require('express');
const { ResellerController } = require('@/v1/controllers');

const router = express.Router();

router.get('/resellers', ResellerController.getAllResellers);

module.exports = router;
