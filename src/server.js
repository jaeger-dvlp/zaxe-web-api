require('module-alias/register');
const chalk = require('chalk');
const app = require('@/src/app/');

const PORT = process.env.PORT || 3005;

app.listen(PORT, () => {
  console.log(
    `${chalk.blue(
      '[ zaxe-api ]'
    )} Server is listening on http://localhost:${PORT}/v1/`
  );
});
