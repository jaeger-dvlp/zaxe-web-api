const path = require('path');
const fs = require('fs');

const CreateLogStream = () => {
  const FolderPath = path.join(__dirname, '../../logs');
  const FilePath = path.join(__dirname, '../../logs/api.zaxe.log');

  if (!fs.existsSync(FolderPath)) fs.mkdirSync(FolderPath);

  if (fs.existsSync(path.join(FilePath)))
    fs.rmSync(FilePath, {
      force: true,
    });

  fs.writeFileSync(FilePath, `##### Zaxe Web API Log File #####\n\n`, {
    encoding: 'utf8',
  });

  return fs.createWriteStream(FilePath, {
    flags: 'a',
    encoding: 'utf8',
  });
};

module.exports = CreateLogStream;
