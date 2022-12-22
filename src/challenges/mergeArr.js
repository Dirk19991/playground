let obj = {};
obj = new Proxy(obj, {
  set(target, prop, val) {
    target[prop] = val.toString();
    return true;
  },
});

obj.foo = 1;

console.log(typeof obj.foo);
