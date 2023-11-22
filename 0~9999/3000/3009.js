{
  const readline = require("readline");
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  let input = [];
  let x = [];
  let y = [];
  const inputCb = (line) => {
    input.push(line.split(" ").map(Number));
  };

  const closeCb = () => {
    input.map((e) => {
      x.push(e[0]);
      y.push(e[1]);
    });
    const resultX = x[0] === x[1] ? x[2] : x[0] === x[2] ? x[1] : x[0];
    const resultY = y[0] === y[1] ? y[2] : y[0] === y[2] ? y[1] : y[0];
    console.log(`${resultX} ${resultY}`);
  };

  rl.on("line", inputCb).on("close", closeCb);
}
