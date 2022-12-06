require('module-alias/register');

const app = require('@/src/app');

const PORT = process.env.PORT || 3005;

app.listen(PORT, () => {
  console.log(`[ zaxe-api ] Server is listening on port ${PORT}!`);
});
