// You are climbing a staircase. It takes n steps to reach the top.

// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

// Example 1:

// Input: n = 2
// Output: 2
// Explanation: There are two ways to climb to the top.
// 1. 1 step + 1 step
// 2. 2 steps
// Example 2:

// Input: n = 3
// Output: 3
// Explanation: There are three ways to climb to the top.
// 1. 1 step + 1 step + 1 step
// 2. 1 step + 2 steps
// 3. 2 steps + 1 step

// n = 4
// 1. 1 step + 1 step + 1 step + 1 step
// 2. 1 step + 2 steps + 1 step
// 3. 2 steps + 1 step + 1 step
// 4.

const memo = new Map();
for (let n = 0; n < 4; n++) {
  memo.set(n, n);
}

var climbStairs = function (n) {
  if (memo.has(n)) {
    return memo.get(n);
  }
  memo.set(n, climbStairs(n - 2) + climbStairs(n - 1));
  return memo.get(n);
};
