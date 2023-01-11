// xample 1:

// Input: arr = [10,2,5,3]
// Output: true
// Explanation: For i = 0 and j = 2, arr[i] == 10 == 2 * 5 == 2 * arr[j]

var checkIfExist = function (arr) {
  const sortedArray = arr.sort((a, b) => a - b);

  let slowPointer = 0;
  let fastPointer = 1;

  while (fastPointer < sortedArray.length) {
    console.log(sortedArray[slowPointer], sortedArray[fastPointer]);
    if (sortedArray[slowPointer] < 0) {
      if (
        sortedArray[fastPointer] * 2 === sortedArray[slowPointer] &&
        sortedArray[slowPointer] !== 0
      ) {
        return true;
      }
      if (sortedArray[fastPointer] * 2 >= sortedArray[slowPointer]) {
        slowPointer++;
      }
      if (sortedArray[fastPointer] * 2 <= sortedArray[slowPointer]) {
        fastPointer++;
      }
    } else {
      if (sortedArray[fastPointer] === sortedArray[slowPointer] * 2) {
        return true;
      }
      if (sortedArray[fastPointer] >= sortedArray[slowPointer] * 2) {
        slowPointer++;
      }
      if (sortedArray[fastPointer] <= sortedArray[slowPointer] * 2) {
        fastPointer++;
      }
    }
  }

  while (slowPointer < sortedArray.length) {
    if (
      sortedArray[sortedArray.length - 1] === sortedArray[slowPointer] * 2 &&
      sortedArray[slowPointer] !== 0
    ) {
      return true;
    }
    slowPointer++;
  }

  return false;
};

console.log(checkIfExist([10, 2, 5, 3]));
