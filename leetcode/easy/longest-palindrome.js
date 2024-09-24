/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function (s) {
  const dict = {};
  let hasOdd = false;
  let result = 0;
  for (let i = 0; i < s.length; i++) {
    dict[s[i]] = (dict[s[i]] || 0) + 1;
  }

  for (const value of Object.values(dict)) {
    result += value;
    if (value % 2 !== 0) {
      result -= 1;
      hasOdd = true;
    }
  }
  return hasOdd ? result + 1 : result;
};

const testCase = "abccccdd";
console.log(longestPalindrome(testCase));
