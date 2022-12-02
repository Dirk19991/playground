function flip(func) {
  return function (...args) {
    const reversedArgs = args.reverse();

    return func.apply(this, reversedArgs);
  };
}

function sum(a, b, c) {
  return [a, b, c];
}

const flippedSum = flip(sum);

console.log(flippedSum(1, 2, 3));
