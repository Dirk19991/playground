// Given an integer n, return the number of strings of length n that consist only of vowels (a, e, i, o, u) and are lexicographically sorted.

// A string s is lexicographically sorted if for all valid i, s[i] is the same as or comes before s[i+1] in the alphabet.

// Example 1:

// Input: n = 1
// Output: 5
// Explanation: The 5 sorted strings that consist of vowels only are ["a","e","i","o","u"].
// Example 2:                                                          5  4    3   2   1

// Input: n = 2
// Output: 15
// Explanation: The 15 sorted strings that consist of vowels only are
// ["aa","ae","ai","ao","au","ee","ei","eo","eu","ii","io","iu","oo","ou","uu"].

// Note that "ea" is not a valid string since 'e' comes after 'a' in the alphabet.
// Example 3:

// Input: n = 33
// Output: 66045

var countVowelStrings = function (n) {
  let letters = [1, 1, 1, 1, 1];
  let count = 1;

  while (count < n) {
    let updatedLetters = [...letters];
    for (let i = letters.length - 1; i >= 0; i--) {
      updatedLetters[i] = letters.slice(i).reduce((acc, elem) => acc + elem, 0);
    }
    letters = updatedLetters;
    count++;
  }

  return letters.reduce((acc, elem) => acc + elem, 0);
};

console.log(countVowelStrings(33));
