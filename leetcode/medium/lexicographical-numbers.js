/**
 * @param {number} n
 * @return {number[]}
 */
var lexicalOrder = function (n) {
  const result = [];
  for (i = 1; i <= n; i++) {
    result.push(String(i));
  }
  result.sort();
  return result.map(Number);
};

console.log(lexicalOrder(13));
