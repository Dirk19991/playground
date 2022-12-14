var strStr = function (haystack, needle) {
  const regex = new RegExp(needle);
  return regex.exec(haystack)?.index ?? -1;
};

console.log(strStr('leetcode', 'leeto'));
