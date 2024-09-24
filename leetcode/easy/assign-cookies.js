/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
// var findContentChildren = function (g, s) {
//   let result = 0;
//   g.sort((a, b) => a - b);
//   s.sort((a, b) => a - b);

//   while (g.length && s.length) {
//     if (g[0] <= s[0]) {
//       result++;
//       g.shift();
//       s.shift();
//     } else {
//       s.shift();
//     }
//   }
//   return result;
// };

var findContentChildren = function (g, s) {
  let result = 0;
  g.sort((a, b) => a - b);
  s.sort((a, b) => a - b);

  let i = 0;
  let j = 0;

  while (i < g.length && j < s.length) {
    if (g[i] <= s[j]) {
      result++;
      i++;
    }
    j++;
  }

  return result;
};

console.log(findContentChildren([10, 9, 8, 7], [5, 6, 7, 8]));
