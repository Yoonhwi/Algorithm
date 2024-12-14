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
  const [N, M] = input.shift().split(" ").map(Number);
  const A = input.slice(0, N).map((v) => v.split("").map(Number));
  const B = input.slice(N).map((v) => v.split("").map(Number));

  function reverse(x, y) {
    for (let i = x; i < x + 3; i++) {
      for (let j = y; j < y + 3; j++) {
        A[i][j] = A[i][j] === 1 ? 0 : 1;
      }
    }
  }

  let count = 0;
  for (let i = 0; i < N - 2; i++) {
    for (let j = 0; j < M - 2; j++) {
      if (A[i][j] !== B[i][j]) {
        count++;
        reverse(i, j);
      }
    }
  }

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (A[i][j] !== B[i][j]) {
        console.log(-1);
        return;
      }
    }
  }

  console.log(count);
});
