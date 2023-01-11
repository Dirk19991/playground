var checkStraightLine = function (coordinates) {
  let sortedCoords = coordinates
    .sort((a, b) => a[0] - b[0])
    .sort((a, b) => a[1] - b[1]);

  let xDiff = sortedCoords[1][0] - sortedCoords[0][0];
  let yDiff = sortedCoords[1][1] - sortedCoords[0][1];

  if (xDiff === 0 || yDiff === 0) {
    return true
  }

  for (let i = 0; i < sortedCoords.length - 1; i++) {
    
    if (
      sortedCoords[i + 1][0] - sortedCoords[i][0] !== xDiff ||
      sortedCoords[i + 1][1] - sortedCoords[i][1] !== yDiff
    ) {
      return false;
    }
  }
  return true;
};

console.log(
  checkStraightLine([
    [2, 4],
    [2, 5],
    [2, 8],
  ])
);
