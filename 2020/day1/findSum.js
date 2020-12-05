function findSum(array, sum, n) {
  return array.reduce((acc, curr, i, src) => {
    if (acc.length) return acc;
    if (sum < 0) return acc;
    if (n === 0) {
      const indexToFind = array.indexOf(sum);
      if (indexToFind !== -1 && indexToFind !== i) return [sum];
      return [];
    }
    const toFind = sum - curr;
    const newArray = [...src];
    newArray.splice(i, 1);
    const res = findSum(newArray, toFind, n - 1);
    if (res.length) return [...res, curr];
    return [];
  }, []);
}
module.exports = findSum;
