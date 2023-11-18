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
    let num = 1;
    let count = Math.floor(word.length / 2);
    for (i = 0; i < count; i++) {
      if (word[i] != word[word.length - i - 1]) {
        num = 0;
        break;
      }
    }
    console.log(num);
  };

  rl.on("line", inputCb).on("close", closeCb);
}
