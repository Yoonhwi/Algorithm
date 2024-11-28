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
  const arr = input.shift();
  arr.sort((a, b) => a - b);
  const [a, b, c] = arr;

  const sum = a + b;

  if (c < sum) {
    console.log("YES");
  } else {
    console.log("NO");
  }
  return;
});
