const readline = require("readline");

let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = "";

rl.on("line", (line) => {
  input = line;
});

rl.on("close", () => {
  const [w, r] = input.split(" ").map(Number);
  const result = w * (1 + Math.floor(r / 30));
  console.log(result);
  return;
});

// input : 100 30
// output : 200