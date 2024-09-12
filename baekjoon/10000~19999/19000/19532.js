{
  const readline = require("readline");
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  let input;

  const inputCb = (line) => {
    input = line.split(" ").map(Number);
  };

  const closeCb = () => {
    const [a, b, c, d, e, f] = input;

    for (let x = -999; x < 1000; x++) {
      for (let y = -999; y < 1000; y++) {
        if (a * x + b * y === c && d * x + e * y === f) {
          console.log(`${x} ${y}`);
          return;
        }
      }
    }
  };

  rl.on("line", inputCb).on("close", closeCb);
}
