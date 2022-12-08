const express = require('express');
const CustomCORS = require('@/v1/middlewares/cors');
const Validator = require('@/v1/middlewares/validator');
const RateLimiter = require('@/v1/middlewares/rate-limiter');
const { FormsController } = require('@/v1/controllers');

// * Schemas
const { ContactSchema } = require('@/v1/schemas');

const router = express.Router();

router.use('/forms', CustomCORS, RateLimiter(5));

router.post(
  '/forms/contact',
  [ContactSchema, Validator],
  FormsController.NewContactRequest
);

module.exports = router;
