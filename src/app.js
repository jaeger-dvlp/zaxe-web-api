const moment = require('moment-timezone');
const parser = require('body-parser');
const express = require('express');
const morgan = require('morgan');
const path = require('path');
const fs = require('fs');
const V1Router = require('@/v1/routes');

const app = express();

const logStream = fs.createWriteStream(
  path.join(__dirname, '../logs/api.zaxe.log'),
  { flags: 'a' }
);
const DateFormat = moment()
  .tz('Europe/Istanbul')
  .format('YYYY/MM/DD hh:mm:ss a');

morgan.token('date', () => DateFormat);
morgan.format('zaxe', '[ zaxe-api ] [ :date ] :url :status');

app.use(
  morgan('zaxe', {
    stream: logStream,
  })
);
app.use(parser.json());
app.use(morgan('zaxe'));
app.use('/v1', V1Router);
app.use('*', (req, res) => {
  res.status(404).send({
    status: 'error',
    message: 'Bzzt! Bzzt! Endpoint not found.',
  });
});

module.exports = app;
