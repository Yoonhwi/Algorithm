//좌표 압축 (정렬)
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

    const dir = {};
    input = input[0].map(Number);
    const arr = [...input];
    input.sort((a, b) => a - b);
    const set = new Set(input);
    [...set].forEach((v, i) => {
      dir[v] = i;
    });

    console.log(arr.map((v) => dir[v]).join(" "));
  };

  rl.on("line", inputCb).on("close", closeCb);
}
