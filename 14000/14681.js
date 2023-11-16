{
  const inputCb = (line) => {
    input.push(line);
    input.map((item, index) => (input[index] = Number(item)));
  };

  const closeCb = () => {
    opreate(input[0], input[1]);
    process.exit();
  };
  const input = [];
  const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  readline.on("line", inputCb).on("close", closeCb);

  function opreate(num1, num2) {
    if (num1 > 0 && num2 > 0) {
      console.log(1);
    } else if (num1 > 0 && num2 < 0) {
      console.log(4);
    } else if (num1 < 0 && num2 > 0) {
      console.log(2);
    } else {
      console.log(3);
    }
  }
}
