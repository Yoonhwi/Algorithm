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
  const [N, K] = input.shift();
  const arr = input.shift();

  for (let i = 0; i < N; i++) {
    const [a, b] = toBinary(arr[i]);
    arr[i] = [arr[i], a, b];
  }

  arr.sort((a, b) => {
    const [ax, ay, az] = a;
    const [bx, by, bz] = b;

    if (az !== bz) {
      return bz - az;
    } else {
      return bx - ax;
    }
  });

  console.log(arr[K - 1][0]);

  function toBinary(num) {
    if (num === 1) return [1, 1];
    let count = 0;
    let str = "";
    while (num > 1) {
      const rest = num % 2;
      if (rest) count++;

      str = `${rest}${str}`;
      num = Math.floor(num / 2);
    }
    if (num) {
      str = `${num}${str}`;
      count++;
    }

    return [Number(str), count];
  }
});
