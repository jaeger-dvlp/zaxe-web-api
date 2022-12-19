const rateLimiter = require('express-rate-limit');

const { NODE_ENV } = process.env;

const RateLimiter = (maxRate = 5) => {
  let MaxRate = maxRate;
  if (NODE_ENV === 'test') {
    MaxRate = 999;
  }
  return rateLimiter({
    windowMs: 60 * 60 * 1000,
    max: MaxRate,
    message: 'Bzzt! Bzzt! Too many requests! Please try again in an hour.',
  });
};

module.exports = RateLimiter;
