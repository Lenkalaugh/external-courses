function getCountElements(arr) {
  let countOdd = 0;
  let countPar = 0;
  let countZero = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      countZero++;
    } else if (arr[i] % 2 === 0) {
      countPar++;
    } else {
      countOdd++;
    }
  }

  return [countPar, countOdd, countZero];
}

module.exports = getCountElements;
