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
    console.log(1);
    console.log(0);
  };

  rl.on("line", inputCb).on("close", closeCb);
}
