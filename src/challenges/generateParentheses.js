// Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

// Example 1:

// Input: n = 3
// Output: ["((()))","(()())","(())()","()(())","()()()"]
// Example 2:

// Input: n = 1
// Output: ["()"]

var generateParenthesis = function (n) {
  let finalArr = [];

  function search(length = 1, array = ['('], countRight = 1, countLeft = 0) {
    if (length === n * 2) {
      finalArr.push(array);
    } else {
      if (countRight === n) {
        search(length + 1, array.concat(')'), countRight, countLeft + 1);
        return;
      }
      if (countRight > countLeft) {
        search(length + 1, array.concat('('), countRight + 1, countLeft);
        search(length + 1, array.concat(')'), countRight, countLeft + 1);
      } else if (countRight === countLeft) {
        search(length + 1, array.concat('('), countRight + 1, countLeft);
      }
    }
  }

  search(1, ['('], 1);

  return finalArr.map((elem) => elem.join(''));
};

console.log(generateParenthesis(2));
