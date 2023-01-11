// let x = 2;

// function test() {
//   let i = 1;

//   return function test2() {
//     i++;
//     return i;
//   };
// }

// let tested1 = test();

// let tested2 = test();

// for (let i = 1; i <= 10; i++) {
//   console.log(i);
//   setTimeout(() => {
//     console.log(i);
//   }, 0);
// }

setTimeout(() => {
  console.log('2');
});

console.log(3);

let p = new Promise((resolve, reject) => {
  resolve(Math.random());
});
p.then((result) => console.log(result))
  .then(
    setTimeout(() => (Math.random > 0.5 ? console.log('12') : console.log('1')))
  )
  .then(() => (Math.random > 0.5 ? console.log('12') : console.log('99')))
  .then(setTimeout(() => console.log('13'), 1000))
  .then(setTimeout(() => console.log('14'), 1000))
  .then(() => console.log('15'))
  .catch(() => console.log('error'));
Promise.resolve().then(() => console.log('1'));
Promise.resolve().then(() => console.log('1'));
