const fs = require('fs');

async function readFile(filePath) {
  const fileContent = await fs.promises.readFile(filePath, 'utf8');
  return fileContent;
}

module.exports = readFile;
