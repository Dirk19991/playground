var rotate = function (matrix) {
  let finalArr = [];
  let index = 0;
  while (index < matrix.length) {
    let tempArr = [];
    for (let i = matrix.length; i--; i >= 0) {
      tempArr.push(matrix[i][index]);
    }
    finalArr.push(tempArr);
    index++;
  }
  matrix = finalArr;
  
};

console.log(
  rotate([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);
