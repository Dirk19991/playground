// Given an integer n, return the nth digit of the infinite integer sequence [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, ...].

// Example 1:

// Input: n = 3
// Output: 3
// Example 2:

// Input: n = 11
// Output: 0
// Explanation: The 11th digit of the sequence 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, ... is a 0, which is part of the number 10.

var findNthDigit = function (n) {
  let k = 1;
  while (n > 0) {
    n -= k.toString().length;
    k++;
  }
  
  const num = (k - 1).toString();
  return num[num.length - 1 + n];
};

console.log(findNthDigit(17));
