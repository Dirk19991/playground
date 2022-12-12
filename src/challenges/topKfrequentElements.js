// Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

// Example 1:

// Input: nums = [1,1,1,2,2,3], k = 2
// Output: [1,2]
// Example 2:

// Input: nums = [1], k = 1
// Output: [1]

var intersection = function (nums1, nums2) {
  let map = {};
  nums1.forEach((elem) => {
    if (!(elem in map)) {
      map[elem] = 1;
    } else {
      map[elem]++;
    }
  });
  let map2 = {};
  nums2.forEach((elem) => {
    if (elem in map && !(elem in map2)) {
      map2[elem] = 1;
    }
  });
  return Object.keys(map2).map((elem) => +elem);
};

console.log(intersection([4, 9, 5], [9, 4, 9, 8, 4]));
