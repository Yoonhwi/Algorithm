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
    input.shift();
    // input.sort((a, b) => a - b).forEach((v) => console.log(v));
    input.sort((a, b) => a - b);
    console.log(input.join("\n"));
  };

  rl.on("line", inputCb).on("close", closeCb);
}
