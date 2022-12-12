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
  let leftPointer = 0;
  let rightPointer = nums.length - 1;
  let i = 0;

  while (i <= rightPointer) {
    if (nums[i] === 0) {
      let temp = nums[i];
      nums[i] = nums[leftPointer];
      nums[leftPointer] = temp;
      leftPointer++;
      i++;
    } else if (nums[i] === 2) {
      let temp = nums[i];
      nums[i] = nums[rightPointer];
      nums[rightPointer] = temp;
      rightPointer--;
    } else if (nums[i] === 1) {
      i++;
    }
  }

  return nums;
};

console.log(sortColors([2, 0, 2, 1, 1, 0]));
