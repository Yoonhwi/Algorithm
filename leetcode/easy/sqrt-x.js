/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  let left = 0;
  let right = x;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (mid * mid > x) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return right;
};

console.log(mySqrt(4)); //2
console.log(mySqrt(8)); //2
