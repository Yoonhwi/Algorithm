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
  const [N, M, K] = input.shift();
  const set = new Set();

  const target = {
    x: 0,
    y: 0,
  };

  let x = 0;
  let y = 0;

  input.forEach((v) => {
    const [a, b] = v;
    set.add(`${a},${b}`);
    x += a;
    y += b;
  });

  target.x = Math.round(x / K);
  target.y = Math.round(y / K);

  const queue = [[target.x, target.y]];
  const set2 = new Set();

  if (set.has(`${target.x},${target.y}`)) {
    while (queue.length) {
      const [x, y] = queue.shift();
      const memoStr = `${x},${y}`;
      if (x < 1 || y < 1 || x > N || y > M || set2.has(memoStr)) continue;

      set2.add(memoStr);

      queue.push([x + 1, y]);
      queue.push([x, y + 1]);
      queue.push([x - 1, y]);
      queue.push([x, y - 1]);
    }

    set2.forEach((v) => {
      if (set.has(v)) set2.delete(v);
    });

    let result = Infinity;

    for (const str of set2) {
      let cnt = 0;
      const [x, y] = str.split(",").map(Number);
      input.forEach((v) => {
        const [a, b] = v;
        cnt += Math.pow(a - x, 2) + Math.pow(b - y, 2);
      });
      result = Math.min(result, cnt);
    }

    console.log(result);
    return;
  }

  let result = 0;
  input.forEach((v) => {
    const [a, b] = v;
    result += Math.pow(a - target.x, 2) + Math.pow(b - target.y, 2);
  });
  console.log(result);
});
