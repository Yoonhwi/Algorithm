/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  let isPositive = x >= 0 ? true : false;
  let result = "";
  const strX = isPositive ? String(x) : String(-x);
  for (i = strX.length - 1; i >= 0; i--) {
    result += strX[i];
  }

  result = isPositive ? Number(result) : -Number(result);
  if (result > Math.pow(2, 31) || result < -Math.pow(2, 31)) {
    return 0;
  }

  return result;
};

console.log(reverse(-123));
