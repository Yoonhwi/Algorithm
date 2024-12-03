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
  //   const input = [[7], [6], [1, 2], [2, 3], [1, 5], [5, 2], [5, 6], [4, 7]];
  const computers = +input.shift()[0];
  const connections = +input.shift()[0];

  const arr = Array.from({ length: computers + 1 }, () => []);
  for (let i = 0; i < connections; i++) {
    const [a, b] = input[i];
    arr[a].push(b);
    arr[b].push(a);
  }

  const queue = [1];

  const visited = Array.from({ length: computers + 1 }, () => false);
  visited[1] = true;
  let result = 0;

  while (queue.length) {
    const v = queue.shift();
    for (const n of arr[v]) {
      if (visited[n]) {
        continue;
      }

      visited[n] = true;
      result++;
      queue.push(n);
    }
  }
  console.log(result);
});

// 메모리초과
// rl.on("close", () => {
//   input.shift();
//   const n = input.shift();
//   const dict = [];
//   let memo = 0;
//   input.forEach((v) => {
//     const [a, b] = v;

//     if (!dict.length) {
//       const set = new Set();
//       set.add(a);
//       set.add(b);
//       dict.push(set);
//       if (a === 1 || b === 1) {
//         memo = 0;
//       }
//     } else {
//       for (let i = 0; i < dict.length; i++) {
//         if (dict[i].has(a) || dict[i].has(b)) {
//           dict[i].add(a);
//           dict[i].add(b);
//         } else {
//           const set = new Set();
//           set.add(a);
//           set.add(b);
//           dict.push(set);
//           if (a === 1 || b === 1) {
//             memo = dict.length - 1;
//           }
//         }
//       }
//     }
//   });
//   console.log(dict[memo].size - 1);
// });
