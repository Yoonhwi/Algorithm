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
  const map = {
    "]": "[",
    ")": "(",
  };

  const output = [];
  for (let i = 0; i < input.length; i++) {
    const stack = [];
    const str = input[i];
    if (str === ".") {
      break;
    }
    let isOk = true;

    for (const word of str) {
      if (word === "(" || word === "[") {
        stack.push(word);
      }

      if (word === ")" || word === "]") {
        const mapWord = stack.pop();
        if (mapWord !== map[word]) {
          isOk = false;
          break;
        }
      }
    }
    if (stack.length) isOk = false;

    output.push(isOk ? "yes" : "no");
  }

  console.log(output.join("\n"));
});
