{
  const readline = require("readline");
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  let dot = 0;
  let line = 2;
  let result = 0;

  const inputCb = (line) => {
    dot = Number(line);
  };

  const closeCb = () => {
    if (dot === 0) {
      console.log(4);
      return;
    } else {
      for (i = 0; i < dot; i++) {
        line = line * 2 - 1;
      }
      result = line * line;
    }
    console.log(result);
  };

  rl.on("line", inputCb).on("close", closeCb);
}
