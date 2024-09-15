{
  const readline = require("readline");
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  let input = [];

  const inputCb = (line) => {
    input.push(Number(line));
  };

  const closeCb = () => {
    const sum = input.reduce((prev, curr) => {
      return prev + curr;
    }, 0);
    console.log(sum / 5);
    console.log(input.sort((a, b) => a - b)[2]);
  };

  rl.on("line", inputCb).on("close", closeCb);
}
