{
  const readline = require("readline");
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  let input = [];
  const DIAL = ["ABC", "DEF", "GHI", "JKL", "MNO", "PQRS", "TUV", "WXYZ"];
  const inputCb = (line) => {
    input = line.split("");
  };

  const closeCb = () => {
    let sum = 0;
    input.map((v) => {
      sum += operate(v);
    });
    console.log(sum);
  };

  const operate = (word) => {
    for (i = 0; i < DIAL.length; i++) {
      if (DIAL[i].includes(word)) {
        return i + 3;
      }
    }
  };

  rl.on("line", inputCb).on("close", closeCb);
}
