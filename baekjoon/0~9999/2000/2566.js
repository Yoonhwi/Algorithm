{
  const readline = require("readline");
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  let input = [];
  let row = 1;
  let coulmn = 1;
  let max = 0;

  const inputCb = (line) => {
    input.push(line.split(" ").map(Number));
  };

  const closeCb = () => {
    for (i = 0; i < input.length; i++) {
      for (j = 0; j < input[0].length; j++) {
        if (input[i][j] > max) {
          max = input[i][j];
          row = i + 1;
          coulmn = j + 1;
        }
      }
    }
    console.log(`${max}\n${row} ${coulmn}`);
  };

  rl.on("line", inputCb).on("close", closeCb);
}
