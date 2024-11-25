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
  const [n, m] = input.split(" ").map(Number);
  for (let i = 0; i < n; i++) {
    const str = "*".repeat(m);
    console.log(str);
  }
});
