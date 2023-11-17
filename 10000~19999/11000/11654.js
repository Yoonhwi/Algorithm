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
    console.log(input.charCodeAt(0));
  };

  rl.on("line", inputCb).on("close", closeCb);
}
