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
  const N = +input.shift();
  const arr = input.map((v, i) => {
    return [...v.split(" ").map(Number), i];
  });

  arr.sort((a, b) => {
    const [ax, ay] = a;
    const [bx, by] = b;

    if (ax !== bx) {
      return bx - ax;
    } else {
      return by - ay;
    }
  });

  const temp = Array.from({ length: N });
  arr.forEach((v, i) => {
    const [x, y, z] = v;
    temp[z] = i;
  });

  console.log(temp.join("\n"));
});
