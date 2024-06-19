{
  const inputCb = (line) => {
    input.push(line);
  };

  const closeCb = () => {
    opreate(Number(input[0]));
    process.exit();
  };

  const input = [];
  const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  readline.on("line", inputCb).on("close", closeCb);

  function opreate(num) {
    const YEAR = 543;
    console.log(num - YEAR);
  }
}
