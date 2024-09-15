{
  const readline = require("readline");
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  let input = 0;

  const inputCb = (line) => {
    input = Number(line);
  };

  const closeCb = () => {
    let num = 666;
    let count = 1;

    while (count !== input) {
      num++;
      if (String(num).includes("666")) count++;
    }

    console.log(num);
  };

  rl.on("line", inputCb).on("close", closeCb);
}
