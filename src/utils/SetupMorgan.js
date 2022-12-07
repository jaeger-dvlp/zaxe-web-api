const morgan = require('morgan');
const moment = require('moment-timezone');
const CreateLogStream = require('./LogStream');

const DateFormat = moment()
  .tz('Europe/Istanbul')
  .format('DD/MM/YYYY hh:mm:ss a');

const SetupMorgan = async (app) => {
  const LogStream = CreateLogStream();
  morgan.token('date', () => DateFormat);
  morgan.format('zaxe', '[ zaxe-api ] [ :date ] :url => :status');

  app.use(morgan('zaxe'));
  app.use(
    morgan('zaxe', {
      stream: LogStream,
    })
  );
};

module.exports = SetupMorgan;
