/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  for (let i = 0; i <= haystack.length - needle.length; i++) {
    let count = 0;

    while (count < needle.length) {
      if (haystack[i + count] === needle[count]) {
        count++;
      } else {
        break;
      }
    }

    if (count === needle.length) {
      return i;
    }
  }

  return -1;
};

console.log(strStr("sadbutsad", "sad"));
