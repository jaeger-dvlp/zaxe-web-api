const { validationResult } = require('express-validator');

const Validator = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).send({
      status: 'error',
      errors: errors.array({ onlyFirstError: true, flatten: true }),
    });
  }

  return next();
};

module.exports = Validator;
