const readFileLines = require('../utils/readFileLine');
const findSum = require('./findSum');

const argv = process.argv;

readFileLines(argv[2], undefined, parseInt)
  .then((arr) => findSum(arr, 2020, 2))
  .then((list) => {
    console.log({ list });
    return list.reduce((acc, curr) => acc * curr, 1);
  })
  .then(console.log);
