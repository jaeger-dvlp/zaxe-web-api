const AllowedOrigins = [
  'https://zaxe.com',
  'https://www.zaxe.com',
  'https://learn.zaxe.com',
  'https://careers.zaxe.com',
  'https://warranty.zaxe.com',
];

const AllowRequest = (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  return next();
};

const CustomCORS = (req, res, next) => {
  const {
    headers: { origin },
  } = req;

  if (!origin || !AllowedOrigins.includes(origin)) {
    return res.status(403).send({
      status: 'error',
      message: 'Bzzt! Bzzt! Origin not allowed.',
    });
  }

  return AllowRequest(req, res, next);
};

module.exports = CustomCORS;
