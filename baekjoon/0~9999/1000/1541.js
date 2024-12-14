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
  const arr = input.split("-");
  let result = 0;

  arr.forEach((v, i) => {
    const plusArr = v.split("+").map(Number);
    let ps = 0;
    plusArr.forEach((v) => (ps += v));

    if (i === 0) {
      result += ps;
    } else {
      result -= ps;
    }
  });

  console.log(result);
});
