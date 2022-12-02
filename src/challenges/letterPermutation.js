var letterCasePermutation = function (s) {
  const res = [];

  function dfs(string, index) {
    if (index >= string.length) {
      res.push(string);
    } else {
      let newString;

      if (s[index].charCodeAt() >= 65 && s[index].charCodeAt() <= 90) {
        newString =
          string.slice(0, index) +
          string[index].toLowerCase() +
          string.slice(index + 1);
      } else if (s[index].charCodeAt() >= 97 && s[index].charCodeAt() <= 122) {
        newString =
          string.slice(0, index) +
          string[index].toUpperCase() +
          string.slice(index + 1);
      }
      if (newString) {
        dfs(string, index + 1);
        dfs(newString, index + 1);
      } else {
        dfs(string, index + 1);
      }
    }
  }

  dfs(s, 0);

  return res;
};

console.log(letterCasePermutation('a1b2'));
