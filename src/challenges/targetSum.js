//stack

// var findTargetSumWays = function (nums, target) {
//   let answer = 0;
//   const stack = [[0, 0]];
//   while (stack.length) {
//     const [pos, sum] = stack.pop();
//     if (pos !== nums.length) {
//       stack.push([pos + 1, sum + nums[pos]]);
//       stack.push([pos + 1, sum - nums[pos]]);
//       console.log(stack);
//       continue;
//     } else if (sum === target) {
//       answer++;
//     }
//   }
//   return answer;
// };

// console.log(findTargetSumWays([1, 1, 1, 1, 1], 3));

// dynamic programming
var findTargetSumWaysDyn = function (nums, S) {
  const map = new Map();
  const n = nums.length;

  return topDown(S, n - 1);

  function topDown(sum, index) {
    if (index < 0) {
      if (sum === 0) return 1;
      else return 0;
    }

    console.log(map);
    const key = `${sum}#${index}`;

    if (map.has(key)) return map.get(key);

    const res =
      topDown(sum + nums[index], index - 1) +
      topDown(sum - nums[index], index - 1);
    map.set(key, res);

    return res;
  }
};

console.log(findTargetSumWaysDyn([1, 1, 1, 1, 1], 3));
