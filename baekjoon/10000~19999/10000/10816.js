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
  const arr = input[1].split(" ").map(Number);
  const target = input[3].split(" ").map(Number);

  const map = new Map();

  arr.forEach((v) => {
    map.has(v) ? map.set(v, map.get(v) + 1) : map.set(v, 1);
  });

  const result = [];
  target.forEach((v) => {
    result.push(map.get(v) ?? 0);
  });
  console.log(result.join(" "));
});
