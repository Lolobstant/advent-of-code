const fs = require('fs');

const echo = (a) => a;

async function readLines(filePath, filterFunction = echo, mapFunction = echo) {
  const fileContent = await fs.promises.readFile(filePath, 'utf8');
  return fileContent
    .split('\n')
    .filter(filterFunction)
    .map((value) => mapFunction(value));
}

module.exports = readLines;
