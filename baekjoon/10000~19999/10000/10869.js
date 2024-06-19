{
  const readline = require("readline");
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  let input = [];

  rl.on("line", function (line) {
    input = line.split(" ");
    input.map((item, index) => (input[index] = Number(item)));
  }).on("close", function () {
    operate(input[0], input[1]);
  });
  function operate(num1, num2) {
    console.log(num1 + num2);
    console.log(num1 - num2);
    console.log(num1 * num2);
    console.log(Math.floor(num1 / num2));
    console.log(num1 % num2);
  }
}
