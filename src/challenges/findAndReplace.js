// Input: words = ["abc","deq","mee","aqq","dkd","ccc"], pattern = "abb"
// Output: ["mee","aqq"]
// Explanation: "mee" matches the pattern because there is a permutation {a -> m, b -> e, ...}.
// "ccc" does not match the pattern because {a -> c, b -> c, ...} is not a permutation, since a and b map to the same letter.

var findAndReplacePattern = function (words, pattern) {
  const patternMap = new Map();
  let count = 1;
  for (let letter of pattern) {
    if (!patternMap.has(letter)) {
      patternMap.set(letter, count);
      count++;
    }
  }
  const matchingString = pattern
    .split('')
    .map((letter) => patternMap.get(letter))
    .join(',');

  const resultArr = [];

  for (let word of words) {
    const wordMap = new Map();
    let count = 1;

    for (let letter of word) {
      if (!wordMap.has(letter)) {
        wordMap.set(letter, count);
        count++;
      }
    }

    const wordString = word
      .split('')
      .map((letter) => wordMap.get(letter))
      .join(',');



    wordString === matchingString && resultArr.push(word);
  }

  return resultArr;
};

console.log(
  findAndReplacePattern(['abc', 'deq', 'mee', 'aqq', 'dkd', 'ccc'], 'abb')
);
