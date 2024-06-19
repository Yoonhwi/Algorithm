{
  const readline = require("readline");
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  let input = [];
  let result = [];
  let money = [25, 10, 5, 1];
  const inputCb = (line) => {
    input.push(Number(line));
  };

  const closeCb = () => {
    input.shift();
    input.map((e) => {
      change(e);
    });
  };

  const change = (num) => {
    money.map((e, i) => {
      result.push(Math.floor(num / e));
      num = num % e;
    });
    console.log(result.join(" "));
    result = [];
  };

  rl.on("line", inputCb).on("close", closeCb);
}
