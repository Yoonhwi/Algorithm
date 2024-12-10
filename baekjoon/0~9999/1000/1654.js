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
  const [K, N] = input.shift().split(" ").map(Number);

  let sum = 0;
  input.forEach((v) => {
    sum += Number(v);
  });

  let left = 1;
  let right = Math.floor(sum / K);

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    let count = 0;
    input.forEach((v) => {
      count += Math.floor(v / mid);
    });

    if (count >= N) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  console.log(right);
});
