const readline = require("readline");
let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input;

rl.on("line", (line) => {
  input = Number(line);
});

rl.on("close", () => {
  const str = "*".repeat(input);
  for (let i = 0; i < input; i++) {
    console.log(str);
  }
  return;
});
