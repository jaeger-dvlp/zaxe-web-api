const express = require('express');
const morgan = require('morgan');
const parser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(parser.json());
app.use(morgan('tiny'));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(PORT, () => {});
