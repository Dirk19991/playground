

var fib = function (n) {
  const memo = { 0: 0, 1: 1, 2: 1 };
  if (!(n in memo)) {
    memo[n] = fib(n - 1) + fib(n - 2);
  }
  return memo[n];
};

console.log(fib(7));
