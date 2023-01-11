// Input: grid = [[3,2,1],[1,7,6],[2,7,7]]
// Output: 1
// Explanation: There is 1 equal row and column pair:
// - (Row 2, Column 1): [2,7,7]

var equalPairs = function (grid) {
  const allRowsAndColumns = {};

  function counter(num) {
    let count = 1;
    let result = 0;
    while (num > 0) {
      result += count;
      count++;
      num--;
    }
    return result;
  }

  grid.forEach((elem) => {
    let candidate = elem.join(',');
    if (allRowsAndColumns[candidate] === undefined) {
      allRowsAndColumns[candidate] = 0;
    } else {
      allRowsAndColumns[candidate]++;
    }
  });

  for (let i = 0; i < grid.length; i++) {
    let candidate = [];
    for (let j = 0; j < grid.length; j++) {
      candidate.push(grid[j][i]);
    }
    candidate = candidate.join(',');
    if (allRowsAndColumns[candidate] === undefined) {
      allRowsAndColumns[candidate] = 0;
    } else {
      allRowsAndColumns[candidate]++;
    }
  }

  const values = Object.values(allRowsAndColumns);
  console.log(allRowsAndColumns);
  return values.reduce(
    (acc, elem) => (elem !== 0 ? (acc += counter(elem)) : acc),
    0
  );
};

console.log(
  equalPairs([
    [3, 1, 2, 2],
    [1, 4, 4, 5],
    [2, 4, 2, 2],
    [2, 4, 2, 2],
  ])
);
