const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", (line) => {
  input.push(Number(line));
});

rl.on("close", () => {
  const length = input.shift();
  const stack = [];
  let sum = 0;

  for (let i = 0; i < length; i++) {
    const curr = input[i];
    if (curr === 0) {
      sum -= stack.pop();
    } else {
      stack.push(curr);
      sum += curr;
    }
  }

  console.log(sum);
  return;
});
