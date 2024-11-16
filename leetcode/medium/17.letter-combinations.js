/**
 * @param {string} digits
 * @return {string[]}
 */

const dict = {
  2: ["a", "b", "c"],
  3: ["d", "e", "f"],
  4: ["g", "h", "i"],
  5: ["j", "k", "l"],
  6: ["m", "n", "o"],
  7: ["p", "q", "r", "s"],
  8: ["t", "u", "v"],
  9: ["w", "x", "y", "z"],
};

var letterCombinations = function (digits) {
  const result = [];
  if (!digits.length) {
    return result;
  }

  addString("", digits, result);
  return result;
};

function addString(str, digits, result) {
  if (!digits.length) {
    result.push(str);
    return;
  }

  const currentDict = dict[Number(digits[0])];
  for (let i = 0; i < currentDict.length; i++) {
    addString(str + currentDict[i], digits.slice(1), result);
  }
}

// 함수를 하나 만들고 , str를 받고 , digits문자를 받음, digit 문자가 없다면 result에 넣음.

console.log(letterCombinations("23")); // output : ["ad","ae","af","bd","be","bf","cd","ce","cf"]
console.log(letterCombinations("2")); // output : ["a","b","c"]
