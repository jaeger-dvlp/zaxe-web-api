require('dotenv').config();
const cors = require('cors');
const chalk = require('chalk');
const helmet = require('helmet');
const express = require('express');
const parser = require('body-parser');
const V1Router = require('@/app/routes');
const SetupMorgan = require('@/src/utils/SetupMorgan');
const SMTP = require('@/src/app/configs/config.nodemailer');

const app = express();

SetupMorgan(app);

SMTP.verify((err) => {
  if (err) throw err;

  console.log(
    `${chalk.hex('#009ade').bold('[ zaxe-api ]')} SMTP Server is ready.`
  );
});

app.use(cors());
app.use(helmet());
app.use(parser.json());
app.use('/v1', V1Router);
app.use('*', (req, res) =>
  res.status(404).send({
    status: 'error',
    message: 'Bzzt! Bzzt! Endpoint not found!',
  })
);

module.exports = app;
