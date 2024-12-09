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
  const set = new Set();
  const N = Number(input[0]);
  const arr = input[1].split(" ").map(Number);
  const M = Number(input[2]);
  const targetArr = input[3].split(" ").map(Number);

  arr.forEach((v) => set.add(v));
  targetArr.forEach((v) => {
    if (set.has(v)) {
      console.log(1);
    } else {
      console.log(0);
    }
  });

  return;
});
