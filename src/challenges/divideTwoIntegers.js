var divide = function (dividend, divisor) {
  if (dividend > 2147483647) {
    return 2147483647;
  }
  if (dividend < -2147483647) {
    return -2147483647;
  }
  if (dividend === 0) {
    return 0;
  }

  if (dividend < 0 && divisor > 0) {
    let count = 0;
    while (dividend <= 0 - divisor) {
      dividend += divisor;
      count--;
    }
    return count;
  }
  if (dividend > 0 && divisor < 0) {
    let count = 0;
    while (dividend >= 0 - divisor) {
      dividend += divisor;
      count--;
    }
    return count;
  }
  if (dividend > 0 && divisor > 0) {
    let count = 0;

    while (dividend >= 0 + divisor) {
      dividend -= divisor;
      count++;
    }
    return count;
  }
  if (dividend < 0 && divisor < 0) {
    let count = 0;
    while (dividend <= 0 + divisor) {
      dividend -= divisor;
      count++;
    }
    return count;
  }
};

console.log(divide(-1, 1));
