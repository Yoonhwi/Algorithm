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
  const N = input.shift();
  if (N <= 2) return 0;

  const arr = input
    .shift()
    .split(" ")
    .map(Number)
    .sort((a, b) => a - b);

  let goodCount = 0;

  for (let i = 0; i < N; i++) {
    isGood(arr[i], i);
  }

  function isGood(target, i) {
    let left = 0;
    let right = N - 1;

    if (right === i) right--;
    if (left === i) left++;

    while (left < right) {
      const sum = arr[left] + arr[right];
      if (sum > target) {
        right--;
      } else if (sum === target) {
        goodCount++;
        return;
      } else {
        left++;
      }

      if (right === i) right--;
      if (left === i) left++;
    }
  }

  console.log(goodCount);
});

/*
5
-1 0 1 2 3
*/
