require('dotenv').config();
const cors = require('cors');
const chalk = require('chalk');
const helmet = require('helmet');
const express = require('express');
const parser = require('body-parser');
const V1Router = require('@/app/routes');
const SetupMorgan = require('@/src/utils/SetupMorgan');
const SMTP = require('@/src/app/configs/nodemailer.config');

const app = express();

if (process.env.NODE_ENV !== 'test') {
  SetupMorgan(app);
}

SMTP.verify((err) => {
  if (err) {
    console.log(
      `${chalk.red(
        chalk.bold('[ zaxe-api ]')
      )} An error occurred while connecting to SMTP Server.`
    );
    return;
  }

  if (process.env.NODE_ENV !== 'test') {
    console.log(
      `${chalk.hex('#009ade').bold('[ zaxe-api ]')} SMTP Server is ready.`
    );
  }
});

app.use(cors());
app.use(helmet());
app.use(parser.json({ limit: '50mb', extended: true }));
app.use('/v1', V1Router);
app.use('*', (req, res) =>
  res.status(404).send({
    status: 'error',
    message: 'Bzzt! Bzzt! Endpoint not found!',
  })
);

module.exports = app;
