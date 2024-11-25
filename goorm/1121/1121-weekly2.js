const readline = require("readline");
let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input = [];

rl.on("line", (line) => {
  input.push(line);
});

rl.on("close", () => {
  input.shift();

  let min = { idx: 0, price: Infinity };
  let max = { idx: 0, price: -Infinity };

  input.forEach((v, i) => {
    const [_, _price] = v.split(" ");
    const price = Number(_price);
    if (price < min.price) {
      min.price = price;
      min.idx = i;
    }

    if (price > max.price) {
      max.price = price;
      max.idx = i;
    }
  });

  console.log(`${input[max.idx]}\n${input[min.idx]}`);
});
