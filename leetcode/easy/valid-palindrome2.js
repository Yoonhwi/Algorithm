/**
 * 시간초과 답안
 * @param {string} s
 * @return {boolean}
 */
// var validPalindrome = function (s) {
//   if (isPalindrome(s)) return true;

//   const dict = {};
//   let oddCount = 0;
//   for (let i = 0; i < s.length; i++) {
//     dict[s[i]] = (dict[s[i]] || 0) + 1;
//   }

//   for (const value of Object.values(dict)) {
//     if (value % 2) {
//       oddCount++;
//     }
//   }
//   if (s.length % 2 !== 0 && oddCount !== 1) return false;
//   if (s.length % 2 === 0 && oddCount !== 2 && oddCount !== 0) return false;

//   for (let i = 0; i < s.length; i++) {
//     let newStr = s.slice(0, i) + s.slice(i + 1);
//     if (isPalindrome(newStr)) return true;
//   }
//   return false;
// };

// function isPalindrome(str) {
//   for (let i = 0; i < str.length / 2; i++) {
//     if (str[i] !== str[str.length - i - 1]) return false;
//   }
//   return true;
// }

/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function (s) {
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    if (s[left] !== s[right]) {
      return (
        isPalindrome(s, left + 1, right) || isPalindrome(s, left, right - 1)
      );
    }
    left++;
    right--;
  }
  return true;
};

function isPalindrome(str, left, right) {
  while (left < right) {
    if (str[left] !== str[right]) return false;
    left++;
    right--;
  }
  return true;
}

console.log(validPalindrome("abca"));
