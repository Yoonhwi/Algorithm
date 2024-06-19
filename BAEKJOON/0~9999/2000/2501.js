{
  const readline = require("readline");
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  let input = [];

  const inputCb = (line) => {
    input = line.split(" ").map(Number);
  };

  const closeCb = () => {
    const [numA, numB] = input;
    let aliquot = [];

    let sqrt = Math.floor(Math.sqrt(numA));
    for (i = 1; i <= sqrt; i++) {
      if (numA % i === 0) {
        aliquot.push(i);
        aliquot.push(numA / i);
      }
    }
    aliquot.sort((a, b) => a - b);
    aliquot = Array.from(new Set(aliquot));

    if (aliquot.length < numB) {
      console.log(0);
    } else {
      console.log(aliquot[numB - 1]);
    }
  };

  rl.on("line", inputCb).on("close", closeCb);
}
