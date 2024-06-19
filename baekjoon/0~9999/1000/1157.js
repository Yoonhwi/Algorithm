{
  const readline = require("readline");
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  let input = [];

  const inputCb = (line) => {
    input.push(line.toUpperCase());
    input = input[0].split("");
  };

  const closeCb = () => {
    operate(input);
  };

  const operate = (arr) => {
    arr = Array.from(new Set(arr));
    let max = 0;
    let count = 0;
    let word = "";
    arr.map((v) => {
      for (i = 0; i < input.length; i++) {
        if (input[i] === v) {
          count++;
        }
      }
      if (count > max) {
        max = count;
        word = v;
      } else if (count === max) {
        word = "?";
      }
      count = 0;
    });
    console.log(word);
  };

  rl.on("line", inputCb).on("close", closeCb);
}
