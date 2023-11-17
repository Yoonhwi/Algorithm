{
  const input = [];
  let score = [];
  const inputCb = (line) => {
    input.push(line);
  };

  const closeCb = () => {
    score = input[1].split(" ").map(Number);
    console.log(operate(score));
  };

  const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  readline.on("line", inputCb).on("close", closeCb);

  function operate(arr) {
    let average = 0;
    let max = 0;
    arr.map((e) => {
      average += e;
      if (e > max) {
        max = e;
      }
    });
    average = (average / arr.length / max) * 100;
    return average;
  }
}
