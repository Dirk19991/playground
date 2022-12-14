// 12. Integer to Roman

// Example 2:

// Input: num = 58
// Output: "LVIII"
// Explanation: L = 50, V = 5, III = 3.
// Example 3:

// Input: num = 1994
// Output: "MCMXCIV"
// Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.

var intToRoman = function (num) {
  let arr = [];
  while (num >= 1000) {
    arr.push('M');
    num -= 1000;
  }
  if (num >= 900 && num < 1000) {
    arr.push('C');
    arr.push('M');
    num -= 900;
  }
  if (num >= 400 && num < 500) {
    arr.push('C');
    arr.push('D');
    num -= 400;
  }
  while (num >= 500) {
    arr.push('M');
    num -= 500;
  }
  while (num >= 100) {
    arr.push('C');
    num -= 100;
  }
  if (num >= 90 && num < 100) {
    arr.push('X');
    arr.push('C');
    num -= 90;
  }
  if (num >= 40 && num < 50) {
    arr.push('X');
    arr.push('L');
    num -= 40;
  }
  while (num >= 50) {
    arr.push('L');
    num -= 50;
  }
  while (num >= 10) {
    arr.push('X');
    num -= 10;
  }
  if (num === 9) {
    arr.push('I');
    arr.push('X');
    num -= 9;
  }
  if (num === 4) {
    arr.push('I');
    arr.push('V');
    num -= 4;
  }
  while (num >= 5) {
    arr.push('V');
    num -= 5;
  }
  while (num >= 1) {
    arr.push('I');
    num -= 1;
  }

  return arr.join('');
};

console.log(intToRoman(400));
