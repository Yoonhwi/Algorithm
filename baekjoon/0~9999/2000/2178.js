const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", (line) => {
  input.push(line);
});

rl.on("close", () => {
  const [row, col] = input.shift().split(" ").map(Number);
  input = input.map((v) => {
    return v.split("").map(Number);
  });

  const disabled = new Set();
  let result = Infinity;

  const queue = [[0, 0, 0]];
  while (queue.length) {
    const [i, j, count] = queue.shift();

    if (
      i < 0 ||
      j < 0 ||
      i >= row ||
      j >= col ||
      disabled.has(`${i},${j}`) ||
      input[i][j] !== 1
    ) {
      continue;
    }

    disabled.add(`${i},${j}`);

    if (i === row - 1 && j === col - 1) {
      result = Math.min(result, count + 1);
    }

    queue.push([i + 1, j, count + 1]);
    queue.push([i, j + 1, count + 1]);
    queue.push([i - 1, j, count + 1]);
    queue.push([i, j - 1, count + 1]);
  }

  console.log(result);
  return;
});
