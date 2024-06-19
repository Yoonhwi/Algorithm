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
    let maxX = Math.max.apply(null, input);

    for (i = 0; i < input.length; i++) {
      if (input[i] === maxX) {
        input.splice(i, 1);
        break;
      }
    }

    while (input[0] + input[1] <= maxX) {
      maxX--;
    }
    console.log(input[0] + input[1] + maxX);
  };

  rl.on("line", inputCb).on("close", closeCb);
}
