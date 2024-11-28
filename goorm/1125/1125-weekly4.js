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
  const output = [];
  if (input % 2 === 0) {
    console.log(-1);
    return;
  }

  let up = false;
  let num = input;

  while (num <= input || !up) {
    output.push(" ".repeat((input - num) / 2) + "*".repeat(num));
    if (num === 1) {
      up = true;
    }
    up ? (num += 2) : (num -= 2);
  }

  console.log(output.join("\n"));
});
