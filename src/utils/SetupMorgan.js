const chalk = require('chalk');
const morgan = require('morgan');
const moment = require('moment-timezone');
const CreateLogStream = require('./LogStream');

const DateFormat = moment()
  .tz('Europe/Istanbul')
  .format('DD/MM/YYYY hh:mm:ss a');

const getStatusColor = (status) => {
  if (status >= 500) {
    return 31;
  }
  if (status >= 400) {
    return 33;
  }
  if (status >= 300) {
    return 36;
  }
  if (status >= 200) {
    return 32;
  }
  return 0;
};

const SetupMorgan = async (app) => {
  const LogStream = CreateLogStream();
  morgan.token('date', () => DateFormat);
  morgan.token('live-status', (req, res) => {
    const status = (
      typeof res.headersSent !== 'boolean'
        ? Boolean(res.header)
        : res.headersSent
    )
      ? res.statusCode
      : undefined;

    return `\x1b[${getStatusColor(status)}m${status}\x1b[0m`;
  });
  morgan.format('zaxe-log', '[ zaxe-api ] [ :date ] :url => :status');
  morgan.format(
    'zaxe-live',
    `${chalk
      .hex('#009ade')
      .bold('[ zaxe-api ]')} [ :date ] :url => :live-status`
  );

  app.use(morgan('zaxe-live'));
  app.use(
    morgan('zaxe-log', {
      stream: LogStream,
    })
  );
};

module.exports = SetupMorgan;
