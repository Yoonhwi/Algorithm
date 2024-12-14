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
  const N = Number(input.shift());
  const output = [];
  for (let i = 0; i < input.length; i++) {
    const [x1, y1, r1, x2, y2, r2] = input[i].split(" ").map(Number);
    const d = Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2);

    if (d === 0) {
      if (r2 === r1) {
        output.push(-1);
        continue;
      } else {
        output.push(0);
        continue;
      }
    }

    if (Math.pow(r1 - r2, 2) < d && d < Math.pow(r1 + r2, 2)) {
      output.push(2);
    } else if (d === Math.pow(r1 + r2, 2) || d === Math.pow(r1 - r2, 2)) {
      output.push(1);
    } else {
      output.push(0);
    }
  }

  console.log(output.join("\n"));
});
