{
  const readline = require("readline");
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  let input = [];
  let result = 0;

  const inputCb = (line) => {
    input.push(line.split(" ").map(Number));
  };

  const closeCb = () => {
    input.shift();
    input[0].map((e) => {
      operate(e);
    });
    console.log(result);
  };

  const operate = (num) => {
    let aliquot = [];
    let sqrt = Math.floor(Math.sqrt(num));
    if (num === 1) {
      return;
    }
    for (i = 1; i <= sqrt; i++) {
      if (num % i === 0) {
        aliquot.push(i);
        aliquot.push(num / i);
      }
    }
    aliquot.length === 2 ? result++ : null;
  };

  rl.on("line", inputCb).on("close", closeCb);
}
