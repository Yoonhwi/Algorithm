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
    let star = "";
    for (i = 0; i < input; i++) {
      star += "*";
      console.log(star);
    }
  };

  rl.on("line", inputCb).on("close", closeCb);
}
