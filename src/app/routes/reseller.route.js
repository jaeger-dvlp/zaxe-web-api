const express = require('express');
const { ResellerController } = require('@/app/controllers');

const router = express.Router();

router.get('/resellers', ResellerController.getAllResellers);

module.exports = router;
