// Example 1:

// Input: name = "alex", typed = "aaleex"
// Output: true
// Explanation: 'a' and 'e' in 'alex' were long pressed.
// Example 2:

// Input: name = "saeed", typed = "ssaaedd"
// Output: false
// Explanation: 'e' must have been pressed twice, but it was not in the typed output.

var isLongPressedName = function (name, typed) {
  let namePointer = 0;

  for (let i = 0; i < typed.length; ) {
    if (typed[i] === name[namePointer]) {
      let arrTyped = [];
      let arrName = [];
      let nameCount = 1;
      let typeCount = 1;
      while (typed[i] === typed[i + typeCount]) {
        arrTyped.push(1);
        typeCount++;
      }

      while (name[namePointer] === name[namePointer + nameCount]) {
        arrName.push(1);
        nameCount++;
      }

      if (arrName.length > arrTyped.length) {
        return false;
      }

      i += typeCount;
      namePointer += nameCount;
    } else {
      return false;
    }
  }
  console.log(namePointer);
  return true;
};

console.log(isLongPressedName('alex', 'aaleex'));
