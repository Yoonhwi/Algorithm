const { dir } = require("console");
const readline = require("readline");
let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input = [];

rl.on("line", (line) => {
  input.push(line);
});

rl.on("close", () => {
  let [treeN, height, _idx] = input.shift().split(" ").map(Number);
  let idx = _idx - 1;

  const trees = input.shift().split(" ").map(Number);
  input.shift();

  const move = input.shift().split(" ");

  let result = 0;
  let count = 0;

  while (move.length) {
    const direction = move.shift();
    const currentTreeHeight = count + trees[idx];
    if (currentTreeHeight >= height) {
      result += currentTreeHeight;
      trees[idx] = -count;
    }

    switch (direction) {
      case "S":
        break;
      case "R":
        idx = idx < treeN - 1 ? idx + 1 : 0;
        break;
      case "L":
        idx = idx > 0 ? idx - 1 : treeN - 1;
        break;
    }
    count++;
  }

  console.log(result);
});
