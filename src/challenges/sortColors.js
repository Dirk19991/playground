// Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.

// We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.

// You must solve this problem without using the library's sort function.

// Example 1:

// Input: nums = [2,0,2,1,1,0]
// Output: [0,0,1,1,2,2]
// Example 2:

// Input: nums = [2,0,1]
// Output: [0,1,2]

var sortColors = function (nums) {
  let n = nums.length;

  for (let i = 0; i < n; i++) {
    if (nums[i] === 0) {
      console.log(nums, i);
      nums.splice(i, 1);
      nums.unshift(0);

      n--;
      console.log(nums, i);
      break;
    }
    if (nums[i] === 2) {
      console.log(nums);
      nums.splice(i, 1);
      nums.push(2);
      i--;
      n--;
      console.log(nums);
    }
  }
  console.log(nums);
};

console.log(sortColors([2, 0, 2, 1, 1, 0]));
