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
  input.shift();
  let result = 0;

  input.forEach((v) => {
    const [numA, numB] = v.split(" ").map(Number);
    const min = Math.min(numA, numB);
    const max = Math.max(numA, numB);

    const divided = max / min;
    if (1.6 <= divided && divided <= 1.63) {
      result++;
    }
  });

  console.log(result);
});

