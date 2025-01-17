const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", (line) => {
  input.push(line);
});

rl.on("close", () => {
  const N = Number(input.shift());
  const arr = input.map((v) => v.split(" ").map(Number));

  let sum = 0;
  const timeline = [];

  for (let i = 0; i < N; i++) {
    const [X, Y, T] = arr[i];
    const distance = Math.pow(0 - X, 2) + Math.pow(0 - Y, 2);
    const time = 2 * distance;
    sum += time;

    timeline.push([T, 1]);
    timeline.push([T + time, -1]);
  }

  timeline.sort((a, b) => a[0] - b[0] || a[1] - b[1]);

  let current = 0;
  let max = -Infinity;
  for (const [t, v] of timeline) {
    current += v;
    max = Math.max(current, max);
  }

  console.log(sum - max);
});
