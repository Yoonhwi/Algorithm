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
  const [N, K] = input.shift();
  let count = 0;
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (input[i][j] !== 1 && getFlagCount(i, j) === K) {
        count++;
      }
    }
  }

  console.log(count);
  return;

  function getFlagCount(x, y) {
    const arr = [
      [x - 1, y - 1],
      [x - 1, y],
      [x - 1, y + 1],
      [x, y - 1],
      [x, y + 1],
      [x + 1, y - 1],
      [x + 1, y],
      [x + 1, y + 1],
    ];

    let count = 0;
    for (let i = 0; i < arr.length; i++) {
      const [x, y] = arr[i];
      if (x < 0 || y < 0 || x >= N || y >= N) {
        continue;
      }

      if (input[x][y] === 1) count++;
    }
    return count;
  }
});
