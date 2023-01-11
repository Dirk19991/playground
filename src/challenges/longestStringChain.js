// Example 1:

// Input: words = ["a","b","ba","bca","bda","bdca"]
// Output: 4
// Explanation: One of the longest word chains is ["a","ba","bda","bdca"].

var longestStrChain = function (words) {
  var memory = {};
  words.sort((a, b) => a.length - b.length);
  for (var word of words) {
    console.log(word);
    var longest = 0;
    for (var i = 0; i < word.length; i++) {
      var pre = word.slice(0, i) + word.slice(i + 1);

      longest = Math.max(longest, (memory[pre] || 0) + 1);
    }
    memory[word] = longest;
  }
  console.log(memory);
  return Math.max(...Object.values(memory));
};

console.log(longestStrChain(['a', 'b', 'ba', 'bca', 'bda', 'bdca']));
