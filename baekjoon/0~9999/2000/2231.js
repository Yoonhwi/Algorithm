{
  const readline = require("readline");
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  let input = 0;

  const operate = (num) => {
    const a = String(num).split("");
    const sum = a.reduce((acc, cur) => {
      return acc + Number(cur);
    }, 0);
    return sum + num;
  };

  const inputCb = (line) => {
    input = Number(line);
  };

  const closeCb = () => {
    for (i = 0; i < input; i++) {
      if (operate(i) === input) {
        console.log(i);
        return;
      }
    }
    console.log(0);
  };

  rl.on("line", inputCb).on("close", closeCb);
}
