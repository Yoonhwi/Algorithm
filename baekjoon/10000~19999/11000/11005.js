{
  const readline = require("readline");
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  let input = [];
  let result = "";

  const inputCb = (line) => {
    input = line.split(" ").map(Number);
  };

  const closeCb = () => {
    let standard = input[0];
    const number = input[1];

    let rest = 0;
    if (standard === 0) {
      console.log(0);
      return;
    }

    while (standard >= number) {
      rest = standard % number;
      standard = Math.floor(standard / number);

      if (rest > 9) {
        rest = String.fromCharCode(rest + 55);
      }
      result = String(rest) + result;
    }

    if (standard != 0) {
      if (standard > 9) {
        standard = String.fromCharCode(standard + 55);
      }
      result = String(standard) + result;
    }

    console.log(result);
  };

  rl.on("line", inputCb).on("close", closeCb);
}
