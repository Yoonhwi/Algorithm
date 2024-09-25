/**
 * @param {string} s
 * @return {number[]}
 */
var diStringMatch = function (s) {
  let count = 0;
  let dCount = 0;
  const arr = new Array(s.length + 1).fill(0);

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "I") {
      arr[i] = count++;
      if (i === s.length - 1) {
        arr[s.length] = count;
      }
    } else dCount++;
  }

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "D") {
      arr[i] = count + dCount--;
      if (i === s.length - 1) {
        arr[s.length] = count + dCount;
      }
    }
  }

  return arr;
};

console.log(diStringMatch("III"));
