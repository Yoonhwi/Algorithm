const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const origin = [];

rl.on("line", (line) => {
  origin.push(line);
});

rl.on("close", () => {
  const n = origin.shift();
  const input = origin.map((line) => line.split("").map(Number));

  const set = new Set();

  const queue = [];
  const result = [];

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (input[i][j] === 1 && !set.has(`${i},${j}`)) {
        queue.push([i, j]);
        let count = 0;

        while (queue.length) {
          const [x, y] = queue.shift();
          if (
            x < 0 ||
            y < 0 ||
            x >= n ||
            y >= n ||
            set.has(`${x},${y}`) ||
            input[x][y] !== 1
          ) {
            continue;
          }

          set.add(`${x},${y}`);
          count++;

          queue.push([x + 1, y]);
          queue.push([x, y + 1]);
          queue.push([x - 1, y]);
          queue.push([x, y - 1]);
        }
        result.push(count);
      }
    }
  }

  console.log(`${result.length}\n${result.sort((a, b) => a - b).join("\n")}`);
});
