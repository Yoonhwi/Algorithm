//좌표 정렬하기 (정렬)
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
    input.shift();
    input.sort((a, b) => {
      if (a[0] < b[0]) return -1;
      if (a[0] === b[0] && a[1] < b[1]) return -1;
    });

    console.log(input.map((v) => v.join(" ")).join("\n"));
  };

  rl.on("line", inputCb).on("close", closeCb);
}
