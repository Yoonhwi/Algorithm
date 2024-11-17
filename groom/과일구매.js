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
  let [_, money] = input.shift().split(" ").map(Number);
  const dict = {};
  let result = 0;

  input.forEach((v) => {
    const [price, heavy] = v.split(" ").map(Number);
    dict[heavy / price] = (dict[heavy / price] ?? 0) + price;
  });

  const dictArr = Object.entries(dict);
  dictArr.sort((a, b) => Number(b[0]) - Number(a[0]));

  const length = dictArr.length;
  for (let i = 0; i < length; i++) {
    let [heavy, num] = dictArr[i];
    const min = Math.min(num, money);
    money -= min;
    result += min * heavy;

    if (!money || i === length - 1) {
      console.log(result);
      return;
    }
  }
  console.log(0);
});
