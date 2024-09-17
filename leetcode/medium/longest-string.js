/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let result = Number.MIN_SAFE_INTEGER;
  let leftIndex = 0;
  let rightIndex = 0;
  let set = new Set();

  const reset = () => {
    result = Math.max(result, set.size);
    set = new Set();
    leftIndex++;
    rightIndex = leftIndex;
  };

  while (leftIndex < s.length) {
    if (!set.has(s[rightIndex])) {
      set.add(s[rightIndex]);
      if (rightIndex < s.length - 1) rightIndex++;
      else reset();
    } else reset();
  }
  if (result === Number.MIN_SAFE_INTEGER) return s.length;
  result = Math.max(result, set.size);
  return result;
};

const testCase = "abcabcbb";
const testCase2 = "bbbbb";
const testCase3 = "pwwkew";
const testCase4 = "aab";
console.log(lengthOfLongestSubstring(testCase4));
