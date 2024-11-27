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

  const stack = [];
  const output = [];

  for (let i = 0; i < length; i++) {
    const a = input[i][0];
    const sl = stack.length;

    switch (a) {
      case 1:
        stack.push(input[i][1]);
        break;
      case 2:
        sl ? output.push(stack.pop()) : output.push(-1);
        break;
      case 3:
        output.push(sl);
        break;
      case 4:
        sl ? output.push(0) : output.push(1);
        break;
      case 5:
        sl ? output.push(stack[sl - 1]) : output.push(-1);
        break;
    }
  }
  console.log(output.join("\n"));
});
