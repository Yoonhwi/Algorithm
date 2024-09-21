/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
  let isPositive = true;
  let hasSign = false;
  let temp = "";
  for (i = 0; i < s.length; i++) {
    if (s[i] === " ") {
      if (temp === "" && !hasSign) {
        continue;
      } else {
        return operate(isPositive, temp);
      }
    }
    if (isNaN(Number(s[i]))) {
      if (temp === "" && (s[i] === "+" || s[i] === "-")) {
        if (hasSign) return 0;
        hasSign = true;
        isPositive = s[i] === "-" ? false : true;
        continue;
      }
      return operate(isPositive, temp);
    } else {
      temp += s[i];
    }
  }

  return operate(isPositive, temp);
};

function operate(isPositive, str) {
  const num = isPositive ? Number(str) : -Number(str);
  if (num >= Math.pow(2, 31)) return Math.pow(2, 31) - 1;
  if (num < -Math.pow(2, 31)) return -Math.pow(2, 31);
  return num;
}

console.log(myAtoi("2147483648"));
