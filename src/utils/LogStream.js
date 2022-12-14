const fs = require('fs');
const path = require('path');
const chalk = require('chalk');

const CreateLogStream = () => {
  try {
    const FolderPath = path.join(__dirname, '../../logs');
    const FilePath = path.join(__dirname, '../../logs/api.zaxe.log');

    if (!fs.existsSync(FolderPath)) fs.mkdirSync(FolderPath);

    if (fs.existsSync(path.join(FilePath))) {
      fs.rmSync(FilePath, {
        force: true,
      });
    }

    fs.writeFileSync(FilePath, '##### Zaxe Web API Log File #####\n\n', {
      encoding: 'utf8',
    });

    return fs.createWriteStream(FilePath, {
      flags: 'a',
      encoding: 'utf8',
    });
  } catch (error) {
    return console.log(
      `${chalk.red(
        chalk.bold('[ zaxe-api ]')
      )} An error occurred while connecting to SMTP Server.`
    );
  }
};

module.exports = CreateLogStream;
