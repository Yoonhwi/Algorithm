/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function (board) {
  const n = board.length;
  if (!n) return;
  const m = board[0].length;

  const dir = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];

  for (let i = 0; i < m; i++) {
    if (board[0][i] === "O" || board[n - 1][i] === "O") {
      for (const [x, y] of dir) {
        dfs(i + x, i + y);
      }
    }
  }
  for (let j = 0; j < n; j++) {
    if (board[j][0] === "O" || board[j][m - 1] === "O") {
      for (const [x, y] of dir) {
        dfs(i + x, i + y);
      }
    }
  }
  function dfs(i, j) {
    if (i < 0 || j < 0 || i >= n || j >= m) return;
    board[i][j] === "S";
  }
  return board;
};

const testCase = [
  ["X", "X"],
  ["X", "O"],
  ["X", "X"],
  ["X", "O"],
];

console.log(solve(testCase));
