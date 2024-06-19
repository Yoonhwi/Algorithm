{
  const readline = require("readline");
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  let input = [];

  const inputCb = (line) => {
    input = Number(line);
  };

  const closeCb = () => {
    operate(input);
  };

  rl.on("line", inputCb).on("close", closeCb);

  function operate(num) {
    let count = 0;
    while (count < 9) {
      count++;
      console.log(`${num} * ${count} = ${num * count}`);
    }
  }
}
