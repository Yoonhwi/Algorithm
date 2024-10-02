/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const stack = [];

  const dict = {
    "}": "{",
    "]": "[",
    ")": "(",
  };

  for (const word of s) {
    if (Object.values(dict).includes(word)) {
      stack.push(word);
    } else {
      if (stack.at(-1) === dict[word]) {
        stack.pop();
      } else {
        return false;
      }
    }
  }

  return stack.length ? false : true;
};

const caseA = "{}"; // output : true
const caseC = "(]"; // output : false

console.log(isValid(caseA));
