var tribonacci = function (n, memo = { 0: 0, 1: 1, 2: 1 }) {
  if (!(n in memo)) {
    memo[n] =
      tribonacci(n - 1, memo) +
      tribonacci(n - 2, memo) +
      tribonacci(n - 3, memo);
  }

  return memo[n];
};

console.log(tribonacci(33));

let foo = 'foo';

const a = [];
let i = 0;

while (i !== 10) {
  a[i++] = function () {
    return i;
  };
}
console.log(a[3]());
