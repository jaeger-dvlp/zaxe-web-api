const rateLimiter = require('express-rate-limit');

const RateLimiter = (maxRate = 5) =>
  rateLimiter({
    windowMs: 60 * 60 * 1000,
    max: maxRate,
    message: 'Bzzt! Bzzt! Too many requests! Please try again in an hour.',
  });

module.exports = RateLimiter;
