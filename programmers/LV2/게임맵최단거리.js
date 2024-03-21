// DFS BFS 길이/너비 우선탐색문제
const maps = [
  [1, 0, 1, 1, 1],
  [1, 0, 1, 0, 1],
  [1, 1, 1, 1, 1],
];

//queue 사용풀이
function solution(maps) {
  const map = [...maps];
  const n = maps.length; //3 행
  const m = maps[0].length; //5 열
  const dir = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];

  function bfs() {
    const queue = [[0, 0, 1]];
    map[0][0] = 0;

    while (queue.length) {
      let [x, y, distance] = queue.shift();
      for (let [dirX, dirY] of dir) {
        const newX = x + dirX; //열
        const newY = y + dirY; //행
        if (newX === m - 1 && newY === n - 1) return distance + 1;
        if (
          newX >= 0 &&
          newY >= 0 &&
          newX < m &&
          newY < n &&
          map[newY][newX] === 1
        ) {
          map[newY][newX] = 0;
          queue.push([newX, newY, distance + 1]);
        }
      }
    }
    return -1;
  }

  return bfs();
}

solution(maps);
