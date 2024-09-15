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
    const set = new Set(input);
    [...set].sort((a, b) => a - b).forEach((v) => console.log(v));
  };

  rl.on("line", inputCb).on("close", closeCb);
}
