const chalk = require('chalk');
const morgan = require('morgan');
const moment = require('moment-timezone');
const CreateLogStream = require('./LogStream');

const DateFormat = moment()
  .tz('Europe/Istanbul')
  .format('DD/MM/YYYY hh:mm:ss a');

const SetupMorgan = async (app) => {
  const LogStream = CreateLogStream();
  morgan.token('date', () => DateFormat);
  morgan.token('status', (req, res) => {
    const status = (
      typeof res.headersSent !== 'boolean'
        ? Boolean(res.header)
        : res.headersSent
    )
      ? res.statusCode
      : undefined;

    let color = null;

    if (status >= 500) {
      color = 31;
    } else if (status >= 400) {
      color = 33;
    } else if (status >= 300) {
      color = 36;
    } else if (status >= 200) {
      color = 32;
    } else {
      color = 0;
    }

    return `\x1b[${color}m${status}\x1b[0m`;
  });
  morgan.format('zaxe-log', `[ zaxe-api ] [ :date ] :url => :status`);
  morgan.format(
    'zaxe-live',
    `${chalk.hex('#009ade').bold('[ zaxe-api ]')} [ :date ] :url => :status`
  );

  app.use(morgan('zaxe-live'));
  app.use(
    morgan('zaxe-log', {
      stream: LogStream,
    })
  );
};

module.exports = SetupMorgan;
