// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]

var moveZeroes = function (nums) {
  let count = 0;

  for (let num = 0; num <= nums.length; num++) {
    if (nums[num] === 0) {
      nums.splice(num, 1);
      count++;
      num--;
    }
  }
  let newArr = new Array(count).fill(0);
  return nums.concat(newArr);
};

console.log(moveZeroes([0, 1, 0, 3, 12]));
