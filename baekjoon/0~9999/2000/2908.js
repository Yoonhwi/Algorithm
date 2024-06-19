{
  const readline = require("readline");
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  let input = [];

  const inputCb = (line) => {
    input = line.split(" ");
  };

  const closeCb = () => {
    num1 = input[0].split("").reverse().join("");
    num2 = input[1].split("").reverse().join("");
    operate(num1, num2);
  };
  const operate = (num1, num2) => {
    num1 > num2 ? console.log(num1) : console.log(num2);
  };
  rl.on("line", inputCb).on("close", closeCb);
}
