// Given a pattern and a string s, find if s follows the same pattern.

// Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in s.

// Example 1:

// Input: pattern = "abba", s = "dog cat cat dog"
// Output: true

var wordPattern = function (pattern, s) {
  const stringArray = s.split(' ');
  const map = {};
  if (stringArray.length !== s.length) {
    return false;
  }

  for (let i = 0; i < stringArray.length; i++) {
    if (!(pattern[i] in map)) {
      if ([...Object.values(map)].some((value) => value === stringArray[i])) {
        return false;
      }
      map[pattern[i]] = stringArray[i];
    }
    if (map[pattern[i]] !== stringArray[i]) {
      return false;
    }
  }

  return true;
};

console.log(wordPattern('jquery', 'jquery'));
