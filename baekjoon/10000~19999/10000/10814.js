//나이순 정렬
{
  const readline = require("readline");
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  let input = [];

  const inputCb = (line) => {
    input.push(line.split(" "));
  };

  const closeCb = () => {
    input.shift();
    input.sort((a, b) => {
      if (Number(a[0]) < Number(b[0])) return -1;
    });

    console.log(input.map((v) => v.join(" ")).join("\n"));
  };

  rl.on("line", inputCb).on("close", closeCb);
}
