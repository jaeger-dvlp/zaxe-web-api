const { validationResult, matchedData } = require('express-validator');

const Validator = (req, res, next) => {
  const errors = validationResult(req);
  const data = matchedData(req);

  if (!errors.isEmpty()) {
    return res.status(422).send({
      status: 'error',
      errors: errors.array({ onlyFirstError: true, flatten: true }),
    });
  }

  if (Object.keys(data).length !== Object.keys(req.body).length) {
    return res.status(400).send({
      status: 'error',
      message: 'Bzzt! Bzzt! Invalid request body.',
    });
  }

  return next();
};

module.exports = Validator;
