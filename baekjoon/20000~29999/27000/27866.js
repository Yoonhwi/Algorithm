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
    let word = input[0].split("");
    let index = Number(input[1]);
    console.log(word[index - 1]);
  };

  rl.on("line", inputCb).on("close", closeCb);
}
