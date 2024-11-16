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

  addString2("", digits, 0, result);
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

// digits.slice(1)은 매번 새로운 문자열을 생성하기 때문에 약간의 성능 손실이 있을 수 있습니다.
// 인덱스 기반으로 처리하면 메모리 사용량을 줄일 수 있습니다.
// 개선된 함수

function addString2(str, digits, index, result) {
  if (digits.length === index) {
    result.push(str);
    return;
  }

  const currentDict = dict[Number(digits[index])];
  for (let i = 0; i < currentDict.length; i++) {
    addString2(str + currentDict[i], digits, index + 1, result);
  }
}

console.log(letterCombinations("23")); // output : ["ad","ae","af","bd","be","bf","cd","ce","cf"]
console.log(letterCombinations("2")); // output : ["a","b","c"]
