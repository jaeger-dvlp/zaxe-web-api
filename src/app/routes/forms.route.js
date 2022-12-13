const express = require('express');
const CustomCORS = require('@/app/middlewares/cors');
const Validator = require('@/app/middlewares/validator');
const RateLimiter = require('@/app/middlewares/rate-limiter');
const { FormsController } = require('@/app/controllers');

// * Schemas
const {
  main: { ContactSchema, TalktosalesSchema, RequestsampleSchema },
  knowledgeBase: { PositiveFeedbackSchema, FeedbackSchema },
  careers: { ApplicationSchema },
} = require('@/app/schemas');

const router = express.Router();

router.use('/forms', CustomCORS, RateLimiter(5));

router.post(
  '/forms/contact',
  [ContactSchema, Validator],
  FormsController.main.NewContactRequest
);

router.post(
  '/forms/talktosales',
  [TalktosalesSchema, Validator],
  FormsController.main.NewTalkToSalesRequest
);

router.post(
  '/forms/requestsample',
  [RequestsampleSchema, Validator],
  FormsController.main.NewRequestSampleRequest
);

router.post(
  '/forms/kb/feedback/positive',
  [PositiveFeedbackSchema, Validator],
  FormsController.knowledgeBase.NewPositiveFeedback
);

router.post(
  '/forms/kb/feedback/',
  [FeedbackSchema, Validator],
  FormsController.knowledgeBase.NewFeedback
);

router.post(
  '/forms/careers/apply',
  [ApplicationSchema, Validator],
  FormsController.careers.NewApplication
);

module.exports = router;
