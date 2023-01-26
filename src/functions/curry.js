function curry(func) {
  return function curried(...args) {
    if (args.length >= func.length) {
      return func.apply(this, args);
    } else {
      return function (...args2) {
        return curried.apply(this, args.concat(args2));
      };
    }
  };
}

function withCurry(fn, prevArgs = []) {
  return (...args) => {
    if (args.length + prevArgs.length < fn.length) {
      return withCurry(fn, [...args, ...prevArgs]);
    }
    const allArgs = [...args, ...prevArgs];
    return fn(...allArgs);
  };
}

function sum(a, b, c) {
  return a + b + c;
}

const curriedSum = curry(sum);
const curriedSum2 = withCurry(sum);

console.log(curriedSum(1)(2));
console.log(curriedSum2(1)(2));
