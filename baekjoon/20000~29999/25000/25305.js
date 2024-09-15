{
  const readline = require("readline");
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  let input = [];

  const inputCb = (line) => {
    input.push(line.split(" "));
  };

  const closeCb = () => {
    const [N, K] = input.shift();
    const arr = input.shift().sort((a, b) => b - a);

    console.log(arr[K - 1]);
  };

  rl.on("line", inputCb).on("close", closeCb);
}
