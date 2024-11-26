/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var findChampion = function (n, edges) {
  if (!edges.length) {
    if (n === 1) {
      return 0;
    } else {
      return -1;
    }
  }
  const win = new Set();
  const lose = new Set();

  edges.forEach((v) => {
    const [a, b] = v;
    lose.add(b);
    if (win.has(b)) {
      win.delete(b);
    }

    if (!lose.has(a)) {
      win.add(a);
    }
  });

  if (win.size + lose.size < n) {
    return -1;
  }

  if (win.size === 1) {
    return win.values().next().value;
  } else {
    return -1;
  }
};

/**
 * win을 굳이 두지않아도 lose에만 저장 + 마지막에 index순회하면서
 * lose에 없다면 배열에 추가해서 , 배열의 길이가 1인지확인
 */

function findChampion(n, edges) {
  if (!edges.length && n === 1) return 0;
  if (!edges.length) return -1;

  const lose = new Set();

  edges.forEach((v) => {
    const [a, b] = v;
    lose.add(b);
  });

  const win = [];
  for (let i = 0; i < n; i++) {
    if (!lose.has(i)) {
      win.push(i);
    }
  }

  if (win.length === 1) {
    return win[0];
  } else {
    return -1;
  }
}

console.log(
  findChampion(3, [
    [0, 1],
    [1, 2],
  ])
);

console.log(
  findChampion(4, [
    [0, 2],
    [1, 3],
    [1, 2],
  ])
);
