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
  let [N, K] = input.shift().split(" ").map(Number);
  let count = 0;
  for (let i = N - 1; i >= 0; i--) {
    const current = Number(input[i]);
    const n = Math.floor(K / current);
    if (n) K %= current;
    count += n;

    if (!K) {
      console.log(count);
      return;
    }
  }

  console.log(count);
});
