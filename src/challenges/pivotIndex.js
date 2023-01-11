var pivotIndex = function (nums) {
  let sumLeft = [0];
  let sumRight = [0];
  let provisionalSum = 0;
  for (let i = 0; i < nums.length; i++) {
    provisionalSum += nums[i];
    sumLeft.push(provisionalSum);
  }

  provisionalSum = 0;

  for (let i = nums.length - 1; i > 0; i--) {
    provisionalSum += nums[i];
    sumRight.unshift(provisionalSum);
  }

  for (let i = 0; i < sumLeft.length; i++) {
    if (sumLeft[i] === sumRight[i]) {
      return i;
    }
  }

  return -1;
};

console.log(pivotIndex([1, 7, 3, 6, 5, 6]));
