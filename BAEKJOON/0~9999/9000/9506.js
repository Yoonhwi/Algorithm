{
  const readline = require("readline");
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  let input = [];

  const inputCb = (line) => {
    input.push(Number(line));
  };

  const closeCb = () => {
    input.pop();
    input.map((e) => {
      operate(e);
    });
  };

  const operate = (num) => {
    let sqrt = Math.floor(Math.sqrt(num));
    let sum = 0;
    let aliquot = [];
    for (i = 1; i <= sqrt; i++) {
      if (num % i === 0) {
        aliquot.push(i);
        aliquot.push(num / i);
      }
    }
    aliquot.sort((a, b) => a - b);
    aliquot = Array.from(new Set(aliquot));

    aliquot.pop();
    for (i = 0; i < aliquot.length; i++) {
      sum += aliquot[i];
    }

    if (sum === num) {
      console.log(`${num} = ${aliquot.join(" + ")}`);
    } else {
      console.log(`${num} is NOT perfect.`);
    }
  };

  rl.on("line", inputCb).on("close", closeCb);
}
