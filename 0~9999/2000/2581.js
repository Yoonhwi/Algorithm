{
  const readline = require("readline");
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  let input = [];
  let sum = 0;
  let result = [];

  const inputCb = (line) => {
    input.push(Number(line));
  };

  const closeCb = () => {
    const [numA, numB] = input;
    for (let i = numA; i <= numB; i++) {
      operate(i);
    }
    if (sum === 0) {
      console.log(-1);
    } else {
      console.log(sum);
      console.log(result[0]);
    }
  };

  const operate = (num) => {
    let sqrt = Math.floor(Math.sqrt(num));
    let aliquot = [];

    if (num === 1) return;

    for (i = 1; i <= sqrt; i++) {
      if (num % i === 0) {
        aliquot.push(i);
        aliquot.push(num / i);
      }
    }

    if (aliquot.length === 2) {
      sum += num;
      result.push(num);
      return;
    } else return;
  };

  rl.on("line", inputCb).on("close", closeCb);
}
