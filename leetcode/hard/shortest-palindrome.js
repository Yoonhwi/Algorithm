/**
 * @param {string} s
 * @return {string}
 */
var shortestPalindrome = function (s) {
  let temp = "";
  let i = s.length - 1;

  while (i >= 0) {
    if (isPalindrome(s.slice(0, i + 1))) {
      break;
    }
    temp += s[i];
    i--;
  }
  return temp + s;
};

function isPalindrome(s) {
  if (s.length < 2) return true;
  for (i = 0; i < s.length / 2; i++) {
    if (s[i] !== s[s.length - 1 - i]) return false;
  }
  return true;
}

const testCase = "aacecaaa";
const testCase2 = "abcd";
const testCase3 = "aabba";
console.log(shortestPalindrome(testCase3));
