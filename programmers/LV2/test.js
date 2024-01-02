{
  const readline = require("readline");
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  let input = "";

  const inputCb = (line) => {
    input = line;
  };
  const outCb = () => {
    console.log(input);
  };

  rl.on("line", inputCb).on("close", outCb);
}
