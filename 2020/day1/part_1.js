const readFileLines = require('../utils/readFileLine');
const findSum = require('./findSum');
// 2020
//  - n = 2
//     - sum = 2020
//     - curr = 20
//     - toFind = 2000
//     - findSum(src, 2000, 1);

//  - n = 1
//     sum = 2000
//     curr = 100
//     toFind = 1900
//     findSum(src, 1900, 0)

//  - n = 0
//   sum = 1900
//   indexTofind(sum) = i || -1
//   > [sum] || [];
const argv = process.argv;

readFileLines(argv[2], undefined, parseInt)
  .then((arr) => findSum(arr, 2020, 1))
  .then((list) => {
    console.log({ list });
    return list.reduce((acc, curr) => acc * curr, 1);
  })
  .then(console.log);
