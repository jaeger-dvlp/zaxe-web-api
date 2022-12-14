require('module-alias/register');
const chalk = require('chalk');
const app = require('@/src/app/');

const PORT = process.env.PORT || 3005;

const server = app.listen(PORT, () => {
  console.log(
    `${chalk
      .hex('#009ade')
      .bold(
        '[ zaxe-api ]'
      )} Server is listening on http://localhost:${PORT}/v1/`
  );
});

module.exports = server;
