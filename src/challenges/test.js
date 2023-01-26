function a() {
  console.log(this);
  function b() {
    console.log(this);
  }
  b();
}

const obj = {
  a: 'a',
  b() {
    function c() {
      console.log(this.a);
    }
    c();
  },
};

obj.b();
