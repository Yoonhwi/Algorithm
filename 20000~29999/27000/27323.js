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
    console.log(input[0] * input[1]);
  };

  rl.on("line", inputCb).on("close", closeCb);
}
