{
  const readline = require("readline");
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  let input = [];
  let result = 0;
  const inputCb = (line) => {
    input = line.split(" ").map(Number);
  };

  const closeCb = () => {
    input.sort(function (a, b) {
      return b - a;
    });
    operate(input[0], input[1], input[2]);
  };

  rl.on("line", inputCb).on("close", closeCb);

  function operate(first, second, third) {
    if (first === second && second === third) {
      result = 10000 + first * 1000;
    } else if (first === second || second === third) {
      result = 1000 + second * 100;
    } else {
      result = first * 100;
    }
    console.log(result);
  }
}
