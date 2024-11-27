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
  const output = [];
  const length = Number(input.shift());

  for (let i = 0; i < length; i++) {
    const curr = input[i];
    if (curr.length % 2 !== 0) {
      output.push("NO");
      continue;
    }

    let openCount = 0;

    for (const word of curr) {
      word === "(" ? openCount++ : openCount--;
      if (openCount < 0) {
        break;
      }
    }

    openCount === 0 ? output.push("YES") : output.push("NO");
  }

  console.log(output.join("\n"));
  return;
});
