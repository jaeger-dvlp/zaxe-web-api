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
  morgan.format('zaxe-log', `[ zaxe-api ] [ :date ] :url => :status`);
  morgan.format(
    'zaxe-live',
    `${chalk.blue('[ zaxe-api ]')} [ :date ] :url => ${chalk.cyan(':status')}`
  );

  app.use(morgan('zaxe-live'));
  app.use(
    morgan('zaxe-log', {
      stream: LogStream,
    })
  );
};

module.exports = SetupMorgan;
