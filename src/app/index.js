const cors = require('cors');
const helmet = require('helmet');
const express = require('express');
const parser = require('body-parser');
const V1Router = require('@/app/routes');
const SetupMorgan = require('@/src/utils/SetupMorgan');

const app = express();

SetupMorgan(app);
app.use(cors());
app.use(helmet());
app.use(parser.json());
app.use('/app', V1Router);
app.use('*', (req, res) =>
  res.status(404).send({
    status: 'error',
    message: 'Bzzt! Bzzt! Endpoint not found!',
  })
);

module.exports = app;
