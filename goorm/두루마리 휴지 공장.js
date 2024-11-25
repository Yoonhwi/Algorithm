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
  const [n, l] = input.shift();
  const arr = input.shift();

  let max = 0;
  let sum = 0;

  arr.forEach((v) => {
    max = Math.max(max, v);
    sum += v;
  });

  if (max * n > l + sum) {
    console.log("No way!");
    return;
  }

  console.log(Math.floor((sum + l) / n));
  return;
});
