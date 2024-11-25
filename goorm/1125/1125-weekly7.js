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
  for (let i = 0; i < input.length; i++) {
    console.log(operate(" " + input[i]));
  }
});

function operate(str) {
  let a = 0;

  for (let i = 1; i < str.length; i += 2) {
    const num = Number(str[i]);
    a += num;
  }

  for (let i = 2; i < str.length; i += 2) {
    const num = Number(str[i]);
    if (num) {
      a *= num;
    }
  }

  return a % 10;
}
