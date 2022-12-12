// 2451. Odd String Difference
// Easy
// 182
// 64
// Companies
// You are given an array of equal-length strings words. Assume that the length of each string is n.

// Each string words[i] can be converted into a difference integer array difference[i] of length n - 1 where difference[i][j] = words[i][j+1] - words[i][j] where 0 <= j <= n - 2. Note that the difference between two letters is the difference between their positions in the alphabet i.e. the position of 'a' is 0, 'b' is 1, and 'z' is 25.

// For example, for the string "acb", the difference integer array is [2 - 0, 1 - 2] = [2, -1].
// All the strings in words have the same difference integer array, except one. You should find that string.

// Return the string in words that has different difference integer array.

var oddString = function (words) {
  let hashMap = {};
  for (let word of words) {
    let temp = '';
    for (let i = 0; i < word.length - 1; i++) {
      temp += word[i + 1].charCodeAt(0) - word[i].charCodeAt(0) + '_';
    }
    console.log(temp);

    hashMap[temp] = hashMap[temp] ? [...hashMap[temp], word] : [word];
    console.log([...Object.values(hashMap)]);
  }
  for (let value of [...Object.values(hashMap)]) {
    if (value.length === 1) return value[0];
  }
};

console.log(oddString(['aaa', 'bob', 'ccc', 'ddd']));
