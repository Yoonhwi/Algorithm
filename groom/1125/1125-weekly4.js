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
  if (!input % 2) {
    console.log(-1);
    return;
  }

  let up = false;
  let num = input;

  while (num <= input || !up) {
    console.log(" ".repeat((input - num) / 2) + "*".repeat(num));
    if (num === 1) {
      up = true;
    }

    if (up) {
      num += 2;
    } else {
      num -= 2;
    }
  }
});
