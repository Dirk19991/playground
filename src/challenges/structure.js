const structure = [
  'a.js',
  'b.js',
  {
    src: [
      'some.js',
      'other.js',
      {
        components: ['someComponent.js'],
      },
    ],
  },
];

const flat = function (str) {
  const result = [];

  function search(data, prefix) {
    data.forEach((elem) => {
      if (typeof elem !== 'object') {
        result.push((prefix + '/' + elem).slice(1));
      } else {
        Object.entries(elem).forEach((entry) => {
          prefix = prefix + '/' + entry[0];
          search(entry[1], prefix);
        });
      }
    });
  }

  search(str, '');

  return result;
};

console.log(flat(structure));

const x = Promise.resolve(1);

x.then((res) => console.log(res));
