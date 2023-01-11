Promise.resolve(123)
  .then((x) => console.log(x + 1))
  .catch((x) => console.log(x + 2))
  .then((x) => console.log(x + 3));
