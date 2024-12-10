const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", (line) => {
  input.push(line);
});

rl.on("close", () => {
  const N = Number(input.shift());
  const arr = input
    .shift()
    .split(" ")
    .map(Number)
    .sort((a, b) => a - b);

  let left = 0;
  let right = N - 1;

  let minAbs = Infinity;
  let result = "";

  while (left < right) {
    const sum = arr[left] + arr[right];
    const abs = Math.abs(sum);
    if (abs < minAbs) {
      minAbs = abs;
      result = `${arr[left]} ${arr[right]}`;
    }

    if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }

  console.log(result);
});
