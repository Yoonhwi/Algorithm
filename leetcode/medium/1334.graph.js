/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} distanceThreshold
 * @return {number}
 */
var findTheCity = function (n, edges, distanceThreshold) {
  const dict = new Map();

  edges.forEach((v) => {
    const [a, b, c] = v;
    if (dict.has(a)) {
      dict.get(a).push([b, c]);
    } else {
      dict.set(a, [[b, c]]);
    }

    if (dict.has(b)) {
      dict.get(b).push([a, c]);
    } else {
      dict.set(b, [[a, c]]);
    }
  });

  let min = Infinity;
  let result;

  for (let i = 0; i < n; i++) {
    if (!dict.has(i)) {
      min = 0;
      result = i;
      continue;
    }

    const set = new Set();
    const clone = new Set();
    dfs(0, set, clone, i);

    if (set.size <= min) {
      min = set.size;
      result = i;
    }
  }

  function dfs(distance, origin, set, target) {
    if (set.has(target) || distance > distanceThreshold) return;
    origin.add(target);

    const current = dict.get(target);
    for (let i = 0; i < current.length; i++) {
      const [target2, value] = current[i];
      set.add(target);
      dfs(distance + value, origin, set, target2);
      set.delete(target);
    }
  }

  return result;
};

console.log(
  findTheCity(
    6,
    [
      [0, 1, 10],
      [0, 2, 1],
      [2, 3, 1],
      [1, 3, 1],
      [1, 4, 1],
      [4, 5, 10],
    ],
    20
  )
);
