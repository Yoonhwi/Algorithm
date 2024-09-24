/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function (flowerbed, n) {
  let count = 0;
  for (let i = 0; i < flowerbed.length; i++) {
    if (flowerbed[i] === 0) {
      if (
        (i === 0 || flowerbed[i - 1] === 0) &&
        (flowerbed[i + 1] === 0 || i === flowerbed.length - 1)
      ) {
        count++;
        flowerbed[i] = 1;
      }
    }
  }
  return count >= n ? true : false;
};

console.log(canPlaceFlowers([1, 0, 0, 0, 0, 0, 1], 1));
