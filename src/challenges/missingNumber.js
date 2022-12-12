var missingNumber = function (nums) {
  let sum;

  if (nums.length % 2 === 0) {
    sum = ((1 + nums.length) * nums.length) / 2;
  } else if (nums.length % 2 !== 0) {
    sum =
      (nums.length + 1) * Math.floor(nums.length / 2) +
      Math.ceil(nums.length / 2);
  }

  return sum - nums.reduce((acc, elem) => acc + elem, 0);
};

console.log(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]));
