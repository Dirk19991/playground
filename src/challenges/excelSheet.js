// Given a string columnTitle that represents the column title as appears in an Excel sheet, return its corresponding column number.

// For example:

// A -> 1
// B -> 2
// C -> 3
// ...
// Z -> 26
// AA -> 27
// AB -> 28
// ...

// Example 1:

// Input: columnTitle = "A"
// Output: 1
// Example 2:

// Input: columnTitle = "AB"
// Output: 28
// Example 3:

// 2 + 1 * 26

// Input: columnTitle = "ZY"
// Output: 701

// AAA
1 + 1 * 26 + 1 * 26 * 26;

// 25 + 26 * 26

var titleToNumber = function (columnTitle) {
  let array = columnTitle.split('');
  let sum = array.reduce(
    (acc, elem, index) =>
      acc + (elem.charCodeAt(0) - 64) * 26 ** (array.length - index - 1),
    0
  );

  return sum;
};

console.log(titleToNumber('ZY'));
