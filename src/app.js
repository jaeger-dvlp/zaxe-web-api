const parser = require('body-parser');
const express = require('express');

const V1Router = require('@/v1/routes');
const SetupMorgan = require('@/src/utils/SetupMorgan');

const app = express();

SetupMorgan(app);

app.use(parser.json());
app.use('/v1', V1Router);
app.use('*', (req, res) =>
  res.status(404).send({
    status: 'error',
    message: 'Bzzt! Bzzt! Endpoint not found!',
  })
);

module.exports = app;
