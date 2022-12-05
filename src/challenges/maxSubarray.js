var maxSubArray = function (nums) {
  let currSum = nums[0];
  let currMax = nums[0];
  for (let i = 1; i < nums.length; i++) {
    currSum = Math.max(currSum + nums[i], nums[i]);
    currMax = Math.max(currSum, currMax);
    console.log(currSum, currMax);
  }
  return currMax;
};

console.log(maxSubArray([1, 2, -5, 5, 1, 3, -7, -1, 11]));
