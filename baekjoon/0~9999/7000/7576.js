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
  const data = [];
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (input[i][j] === 1) {
        data.push([i, j]);
      }
    }
  }

  for (let i = 0; i < data.length; i++) {
    const [a, b] = data[i];
    const set = new Set();

    const queue = [[a, b, 0]];
    while (queue.length) {
      const [x, y, c] = queue.shift();
      if (
        x < 0 ||
        y < 0 ||
        x >= row ||
        y >= col ||
        input[x][y] === -1 ||
        set.has(`${x},${y}`)
      ) {
        continue;
      }

      let min = c + 1;

      if (input[x][y] > 1 && input[x][y] <= min) {
        continue;
      }

      input[x][y] = min;
      set.add(`${x},${y}`);

      queue.push([x + 1, y, min]);
      queue.push([x, y + 1, min]);
      queue.push([x - 1, y, min]);
      queue.push([x, y - 1, min]);
    }
  }

  let result = -Infinity;

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (input[i][j] === 0) {
        console.log(-1);
        return;
      } else {
        result = Math.max(result, input[i][j]);
      }
    }
  }
  console.log(result - 1);
});
