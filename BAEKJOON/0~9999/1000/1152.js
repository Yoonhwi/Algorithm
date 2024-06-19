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
    const num = input.filter((v) => v.length > 0);
    console.log(num.length);
  };

  rl.on("line", inputCb).on("close", closeCb);
}
