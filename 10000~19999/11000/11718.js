{
  const readline = require("readline");
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  let input = [];
  const inputCb = (line) => {
    input.push(line);
  };

  const closeCb = () => {
    input.map((v) => console.log(v));
  };

  rl.on("line", inputCb).on("close", closeCb);
}
