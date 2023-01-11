var validMountainArray = function (arr) {
  if (arr.length < 3) {
    return false;
  }

  let increased = false;
  let tippingPoint;

  let i = 0;
  while (i < arr.length - 1) {
    if (arr[i] === arr[i + 1]) {
      return false;
    }
    if (arr[i] > arr[i + 1]) {
      increased = true;
      tippingPoint = i;
      break;
    }
    i++;
  }

  for (let j = tippingPoint; j < arr.length - 1; j++) {
    if (arr[j] <= arr[j + 1]) {
      return false;
    }
  }

  return true;
};

console.log(validMountainArray([3, 5, 5]));
