{
  const readline = require("readline");
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  let input = [];
  let result = [];
  let count = 0;

  const inputCb = (line) => {
    input.push(line.split(" ").map(Number));
  };

  const closeCb = () => {
    input.shift();
    input.map((e) => {
      for (i = e[1]; i < e[1] + 10; i++) {
        if (!result[i]) {
          result[i] = [];
        }
        for (j = e[0]; j < e[0] + 10; j++) {
          if (!result[i][j]) {
            result[i][j] = 1;
            count++;
          }
        }
      }
    });
    console.log(count);
  };

  rl.on("line", inputCb).on("close", closeCb);
}
