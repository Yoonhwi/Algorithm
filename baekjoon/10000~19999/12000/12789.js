const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", (line) => {
  input.push(line.split(" ").map(Number));
});

rl.on("close", () => {
  const length = input.shift();
  const arr = input.shift();
  const stack = [];

  for (let i = 1; i <= length; i++) {
    if (i === arr[0]) {
      arr.shift();
      continue;
    }

    if (i === stack[stack.length - 1]) {
      stack.pop();
      continue;
    }

    while (arr[0] !== i && arr.length) {
      stack.push(arr.shift());
    }
    arr.shift();
  }

  if (!arr.length && !stack.length) {
    console.log("Nice");
  } else {
    console.log("Sad");
  }
  return;
});
