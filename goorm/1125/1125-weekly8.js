const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = "";

rl.on("line", (line) => {
  input = Number(line);
});

rl.on("close", () => {
  let a = 0;

  while (input >= 5) {
    input = Math.floor(input / 5);
    a += input;
  }

  console.log(a);
});
