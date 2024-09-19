// var longestPalindrome = function (s) {
//   let result = "";
//   for (let i = 0; i < s.length; i++) {
//     for (let j = 0; j < s.length; j++) {
//       const word = s.slice(i, j + 1);
//       if (isPalindrome(word) && word.length >= result.length) {
//         result = word;
//       }
//     }
//   }
//   return result;
// };

// function isPalindrome(s) {
//   for (let i = 0; i < Math.floor(s.length / 2); i++) {
//     if (s[i] !== s[s.length - 1 - i]) return false;
//   }
//   return true;
// }
var longestPalindrome = function (s) {
  if (s.length < 1) return "";
  let start = 0,
    end = 0;

  for (let i = 0; i < s.length; i++) {
    let length1 = expandAroundCenter(s, i, i);
    let length2 = expandAroundCenter(s, i, i + 1);
    let longest = Math.max(length1, length2);
    if (longest > end - start) {
      start = i - Math.floor((longest - 1) / 2);
      end = i + Math.floor(longest / 2);
    }
  }
  return s.substring(start, end + 1);
};

function expandAroundCenter(s, left, right) {
  while (left >= 0 && right < s.length && s[left] === s[right]) {
    left--;
    right++;
  }

  return right - left - 1;
}

console.log(longestPalindrome("babad"));
