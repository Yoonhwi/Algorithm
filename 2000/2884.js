{
  const readline = require("readline");
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  let input = [];

  const inputCb = (line) => {
    input = line.split(" ");
    input.map((item, index) => (input[index] = Number(item)));
  };

  const closeCb = () => {
    operate(input[0], input[1]);
  };
  rl.on("line", inputCb).on("close", closeCb);

  function operate(num1, num2) {
    const minute = 60 - (45 - num2);
    if (num2 < 45) {
      if (num1 === 0) {
        num1 = 23;
        num2 = minute;
      } else {
        num1--;
        num2 = minute;
      }
    } else {
      num2 -= 45;
    }
    console.log(num1, num2);
  }
}
