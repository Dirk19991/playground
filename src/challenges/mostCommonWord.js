// Example 1:

// Input: paragraph = "Bob hit a ball, the hit BALL flew far after it was hit.", banned = ["hit"]
// Output: "ball"
// Explanation:
// "hit" occurs 3 times, but it is a banned word.
// "ball" occurs twice (and no other word does), so it is the most frequent non-banned word in the paragraph.
// Note that words in the paragraph are not case sensitive,
// that punctuation is ignored (even if adjacent to words, such as "ball,"),
// and that "hit" isn't the answer even though it occurs more because it is banned.
// Example 2:

// Input: paragraph = "a.", banned = []
// Output: "a"

var mostCommonWord = function (paragraph, banned) {
  const wordsArr = paragraph
    .replaceAll(/[^a-z]+/g, ' ')
    .trim()
    .split(' ')
    .map((elem) => elem.toLowerCase())
    .map((elem) => elem.replaceAll(/[^a-z]+/g, ''));
  const wordMap = {};

  for (let word of wordsArr) {
    if (banned.includes(word)) {
      continue;
    } else if (!wordMap[word]) {
      wordMap[word] = 1;
    } else {
      wordMap[word]++;
    }
  }

  return Object.entries(wordMap).sort((a, b) => b[1] - a[1])[0][0];
};

console.log(mostCommonWord('a, a, a, a, b,b,b,c, c', ['a']));
