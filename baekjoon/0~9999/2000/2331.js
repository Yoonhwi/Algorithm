const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = "";

rl.on("line", (line) => {
  input = line;
});

rl.on("close", () => {
  const [A, P] = input.split(" ");
  const arr = [A];
  const map = new Map().set(Number(A), 0);
  let idx = 1;

  while (true) {
    const str = arr[arr.length - 1];
    let num = 0;
    for (let i = 0; i < str.length; i++) {
      num += Math.pow(Number(str[i]), P);
    }

    if (map.has(num)) {
      console.log(map.get(num));
      break;
    }

    arr.push(String(num));
    map.set(num, idx);
    idx++;
  }
});
