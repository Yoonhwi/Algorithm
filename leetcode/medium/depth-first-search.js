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

  function dfs(i, j) {
    if (i < 0 || j < 0 || i >= n || j >= m || board[i][j] !== "O") return;
    board[i][j] = "S";
    for (const [dx, dy] of dir) {
      dfs(i + dx, j + dy);
    }
  }

  for (let i = 0; i < m; i++) {
    if (board[0][i] === "O") dfs(0, i);
    if (board[n - 1][i] === "O") dfs(n - 1, i);
  }

  for (let j = 0; j < n; j++) {
    if (board[j][0] === "O") dfs(j, 0);
    if (board[j][m - 1] === "O") dfs(j, m - 1);
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      board[i][j] === "O" && (board[i][j] = "X");
      board[i][j] === "S" && (board[i][j] = "O");
    }
  }

  return board;
};

const testCase = [
  ["X", "O", "X"],
  ["O", "X", "O"],
  ["X", "O", "X"],
];

console.log(solve(testCase));
