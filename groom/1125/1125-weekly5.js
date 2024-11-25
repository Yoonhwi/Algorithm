const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = "";

rl.on("line", (line) => {
  input = line;
});

rl.on("close", () => {
  const arr = input.split(" ").map(Number);
  arr.sort((a, b) => a - b);
  const [a, b, c] = arr;

  if (c < a + b) {
    console.log("YES");
  } else {
    console.log("NO");
  }
  return;
});
