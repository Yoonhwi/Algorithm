const readline = require("readline");
let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", (line) => {
  input.push(line.split(" ").map(Number));
});

rl.on("close", () => {
  const [N, M, S, E] = input.shift();

  const dict = {};
  const hitto = {};

  input.forEach(([a, b]) => {
    if (!dict[a]) {
      dict[a] = new Set();
    }

    if (!dict[b]) {
      dict[b] = new Set();
    }

    dict[a].add(b);
    dict[b].add(a);
  });

  let queue = [];

  for (let i = 1; i <= N; i++) {
    let isLog = false;

    if (S === i || S === i) {
      console.log(-1);
      continue;
    }

    queue.push([1, S, i]);

    while (queue.length) {
      const [count, current, index] = queue.shift();
      if (count > M) {
        continue;
      }
      if (hitto[i] && hitto[i] >= count) {
        continue;
      }

      if (current === E) {
        console.log(count);
        isLog = true;
        queue = [];
        continue;
      }

      for (const city of dict[current]) {
        if (city !== index) {
          queue.push([count + 1, city, index]);
        }
      }
    }
    if (!isLog) console.log(-1);
  }
});
