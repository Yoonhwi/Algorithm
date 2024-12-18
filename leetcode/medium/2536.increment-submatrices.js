/**
 * @param {number} n
 * @param {number[][]} queries
 * @return {number[][]}
 */
var rangeAddQueries = function (n, queries) {
  const dict = Array.from({ length: n }, () =>
    Array.from({ length: n }, () => 0)
  );

  for (let i = 0; i < queries.length; i++) {
    let [x1, y1, x2, y2] = queries[i];

    for (let a = x1; a <= x2; a++) {
      for (let b = y1; b <= y2; b++) {
        dict[a][b]++;
      }
    }
  }

  return dict;
};

console.log(
  rangeAddQueries(3, [
    [1, 1, 2, 2],
    [0, 0, 1, 1],
  ])
);
