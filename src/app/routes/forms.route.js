const express = require('express');
const CustomCORS = require('@/app/middlewares/cors');
const Validator = require('@/app/middlewares/validator');
const RateLimiter = require('@/app/middlewares/rate-limiter');
const { FormsController } = require('@/app/controllers');

// * Schemas
const { ContactSchema } = require('@/app/schemas');
const { TalktosalesSchema } = require('../schemas/form.schema');

const router = express.Router();

router.use('/forms', CustomCORS, RateLimiter(5));

router.post(
  '/forms/contact',
  [ContactSchema, Validator],
  FormsController.NewContactRequest
);

router.post(
  '/forms/talktosales',
  [TalktosalesSchema, Validator],
  FormsController.NewTalkToSalesRequest
);

module.exports = router;
