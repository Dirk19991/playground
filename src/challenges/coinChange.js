// Input: coins = [1,2,5], amount = 11
// Output: 3
// Explanation: 11 = 5 + 5 + 1

var coinChange = function (coins, amount, memo = {}) {
  if (amount === 0) {
    return 0;
  }

  let minAmount = Infinity;

  function bfs(min, amount, coins) {
    for (let coin of coins) {
      if (amount - coin === 0) {
        minAmount = Math.min(min + 1, minAmount);
        const memoString = min + ',' + amount;
        memo[memoString] = true;
        console.log(memo);
      } else if (amount - coin > 0) {
        bfs(min + 1, amount - coin, coins);
      }
    }
  }

  bfs(0, amount, coins);

  return minAmount === Infinity ? -1 : minAmount;
};

console.log(coinChange([1, 2, 5], 19));
