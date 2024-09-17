//숫자 카드
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
    const N = new Set(input[1]);
    const M = input[3];

    const result = M.map((v) => {
      if (N.has(v)) return 1;
      else return 0;
    });

    console.log(result.join(" "));
  };

  rl.on("line", inputCb).on("close", closeCb);
}
