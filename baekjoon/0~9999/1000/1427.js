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

  const closeCb = () => {
    const arr = input.split("").map(Number);
    arr.sort((a, b) => b - a);
    console.log(arr.join(""));
  };

  rl.on("line", inputCb).on("close", closeCb);
}
