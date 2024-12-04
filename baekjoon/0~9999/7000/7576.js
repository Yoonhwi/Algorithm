const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", (line) => {
  input.push(line.split(" ").map(Number));
});

rl.on("close", () => {
  const [col, row] = input.shift();
  const queue = [];

  let max = -Infinity;
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (input[i][j] === 1) {
        queue.push([i, j, 0]);
      }
    }
  }

  if (!queue.length) {
    console.log(-1);
    return;
  }

  const directions = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];
  let count = 0;

  while (queue.length > count) {
    const [a, b, c] = queue[count++];

    for (const [dx, dy] of directions) {
      const x = dx + a;
      const y = dy + b;

      if (x >= 0 && y >= 0 && x < row && y < col && input[x][y] === 0) {
        input[x][y] = 1;
        queue.push([x, y, c + 1]);
        max = Math.max(max, c + 1);
      }
    }
  }

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (input[i][j] === 0) {
        console.log(-1);
        return;
      }
    }
  }

  console.log(max === -Infinity ? 0 : max);
});
