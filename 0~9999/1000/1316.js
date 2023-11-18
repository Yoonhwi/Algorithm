{
  const readline = require("readline");
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  let input = [];
  let result = 0;
  const inputCb = (line) => {
    input.push(line);
  };

  const closeCb = () => {
    result = Number(input[0]);
    input.shift();
    input.map((v, i) => {
      let word = v.split("");
      operate(word);
    });
    console.log(result);
  };

  const operate = (arr) => {
    let word = [];
    for (i = 0; i < arr.length; i++) {
      if (arr[i] != arr[i + 1]) {
        for (j = 0; j < word.length; j++) {
          if (word[j] === arr[i]) {
            result--;
            return;
          }
        }
        word.push(arr[i]);
      }
    }
  };

  rl.on("line", inputCb).on("close", closeCb);
}
