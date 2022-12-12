var subsets = function (nums) {
  let results = [[]];

  function dfs(index, array, slate = []) {
    if (index === 0) {
      results.push(slate);
      return;
    }

    for (let elem of array) {
      slate.push(elem);
      results.push(slate);
      const newArr = array
        .slice(0, array.indexOf(elem))
        .concat(array.slice(array.indexOf(elem) + 1));

      dfs(index + 1, newArr, slate);
      slate.pop();
    }
  }

  dfs(nums.length - 1, nums, []);

  return results;
};

console.log(subsets([1, 2, 3]));

// Input: nums = [1,2,3]
// Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
