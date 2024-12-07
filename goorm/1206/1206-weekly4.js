const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", (line) => {
  input.push(Number(line));
});

rl.on("close", () => {
  const N = input.shift();
  const result = input.map((v) => {
    return getMinTransformations(v);
  });
  console.log(result.join("\n"));
});

function isFantastic(A) {
  for (let W = 2; W <= A; W++) {
    if (A > W && A % W === 0) {
      return false;
    }
  }
  return true;
}

function getMinTransformations(A) {
  if (isFantastic(A)) {
    return 0;
  }

  for (let i = 1; i <= A - 2; i++) {
    if (isFantastic(A - i)) {
      return i;
    }
  }

  return -1;
}
