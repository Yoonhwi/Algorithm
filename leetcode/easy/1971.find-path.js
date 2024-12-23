/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
var validPath = function (n, edges, source, destination) {
  let result = false;
  const map = new Map();
  if (!edges.length) {
    if (source === destination) {
      return true;
    } else {
      return false;
    }
  }

  for (const [a, b] of edges) {
    if (map.has(a)) {
      map.get(a).push(b);
    } else {
      map.set(a, [b]);
    }

    if (map.has(b)) {
      map.get(b).push(a);
    } else {
      map.set(b, [a]);
    }
  }

  const current = map.get(source);
  const visited = Array.from({ length: n }, () => false);
  visited[source] = true;

  const dfs = (arr) => {
    for (let i = 0; i < arr.length; i++) {
      const num = arr[i];
      if (num === destination) {
        result = true;
        return;
      }

      if (visited[num] || !map.get(num)) continue;
      visited[num] = true;
      dfs(map.get(num));
    }
  };

  dfs(current);

  return result;
};

// 7 1 9

console.log(
  validPath(
    10,
    [
      [4, 3],
      [1, 4],
      [4, 8],
      [1, 7],
      [6, 4],
      [4, 2],
      [7, 4],
      [4, 0],
      [0, 9],
      [5, 4],
    ],
    5,
    9
  )
);
