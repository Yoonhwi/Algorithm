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
    input.pop();
    input.map((arr) => {
      operate(arr[0], arr[1]);
    });
  };

  const operate = (numA, numB) => {
    let sqrt = Math.floor(Math.sqrt(numB));
    let aliquot = [];
    for (i = 1; i <= sqrt; i++) {
      if (numB % i === 0) {
        aliquot.push(i);
        aliquot.push(numB / i);
      }
    }
    if (aliquot.includes(numA)) {
      console.log("factor");
    } else if (numA % numB === 0) {
      console.log("multiple");
    } else {
      console.log("neither");
    }
  };

  rl.on("line", inputCb).on("close", closeCb);
}
