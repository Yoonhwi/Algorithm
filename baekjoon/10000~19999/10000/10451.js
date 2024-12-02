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
  input.shift();
  while (input.length) {
    let result = 0;
    const length = Number(input.shift());
    const arr = input.shift().split(" ").map(Number);
    const visited = new Set();

    for (let i = 0; i < length; i++) {
      const index = i + 1;
      if (index === arr[i]) {
        result++;
        continue;
      }

      if (!visited.has(index)) {
        operate(arr, i, visited);
        result++;
      }
    }

    console.log(result);
  }

  function operate(arr, num, visited) {
    const current = arr[num];
    visited.add(num + 1);
    if (visited.has(current)) {
      return;
    }

    operate(arr, current - 1, visited);
  }
});
