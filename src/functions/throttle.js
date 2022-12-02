function throttle(f, ms) {
  let isThrottled = false;
  let savedArgs;
  let savedThis;

  return function (...args) {
    if (isThrottled) {
      savedArgs = [...args];
      savedThis = this;
      return;
    }

    f.call(this, ...args);

    isThrottled = true;

    setTimeout(() => {
      isThrottled = false;
      if (savedArgs) {
        f.apply(savedThis, savedArgs);
        savedArgs = null;
        savedThis = null;
      }
    }, ms);
  };
}

function sum(...args) {
  console.log([...args].reduce((acc, elem) => acc + elem, 0));
}

const debounceSum = throttle(sum, 1000);

debounceSum(1, 2, 3);
debounceSum(1, 2, 3);
debounceSum(1, 2, 3);
debounceSum(1, 2, 3, 4);
