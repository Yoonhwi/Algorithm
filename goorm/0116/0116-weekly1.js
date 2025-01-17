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
  const c = input.shift().split(" ").map(Number);
  const N = Number(input.shift());

  const arr = input.map((v) => v.split(" ").map(Number));

  arr.sort((a, b) => a[0] - b[0]);

  let sum = 0;
  let count = 0;

  for (let i = 0; i < N; i++) {
    const [price, type] = arr[i];

    if (c[type] <= 0 && c[2] <= 0) {
      continue;
    }

    sum += price;
    count++;

    if (c[type] > 0) {
      c[type]--;
    } else {
      c[2]--;
    }
  }

  console.log(count, sum);
});
