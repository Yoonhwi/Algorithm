{
  const readline = require("readline");
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  let input = 0;

  const inputCb = (line) => {
    input = Number(line);
  };

  const closeCb = () => {
    console.log(4 * input);
  };

  rl.on("line", inputCb).on("close", closeCb);
}
