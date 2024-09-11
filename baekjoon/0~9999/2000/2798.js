{
  const readline = require("readline");
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  let input = [];

  const inputCb = (line) => {
    input.push(line.split(" ").map(Number));
  };

  const closeCb = () => {
    const limit = input[0][1];
    const numArr = input[1];
    const arrLength = input[0][0];
    let result = 0;

    for (i = 0; i < arrLength - 2; i++) {
      for (j = i + 1; j < arrLength - 1; j++) {
        for (k = j + 1; k < arrLength; k++) {
          if (i === k || j === k) continue;
          const sum = numArr[i] + numArr[j] + numArr[k];
          if (sum <= limit) {
            result = Math.max(result, sum);
          }
        }
      }
    }
    console.log(result);
  };

  rl.on("line", inputCb).on("close", closeCb);
}
