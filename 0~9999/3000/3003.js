{
  const readline = require("readline");
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  let input = [];
  const ARRAY = [1, 1, 2, 2, 2, 8];
  const inputCb = (line) => {
    input = line.split(" ").map(Number);
  };

  const closeCb = () => {
    input.map((v, i) => {
      input[i] = ARRAY[i] - v;
    });
    console.log(input.join(" "));
  };

  rl.on("line", inputCb).on("close", closeCb);
}
