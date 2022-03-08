function maxPositivElement(arr) {
  let maxElement = 0;

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
}

module.exports = maxPositivElement;
