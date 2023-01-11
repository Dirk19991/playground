function test() {
  return () => this.foo;
}

console.log(test.call({ foo: 1 })());

const obj = {
  foo: 1,
  foo4() {
    let arror = () => console.log(this.foo);
    arror();
  },
};

obj.foo4();

const promise = new Promise((res) => {
  console.log('foo');
  setTimeout(() => {
    res();
  }, 0);
});

console.log('bar');

promise.then(() => {
  console.log('baz');
});

const arr = [1, 2, 3];

for (let i in arr) {
  console.log(arr[i]);
}

const myfunction = function yourFunction(a, b) {
  return a + b;
};

console.log(myfunction.name);
