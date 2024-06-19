{
  const inputCb = (line) => {
    input.push(line);
  };

  const closeCb = () => {
    let inputNum = Number(input[0].split(" ")[1]);
    let inputArr = input[1].split(" ").map(Number);
    inputArr = inputArr.filter((item) => item < inputNum);
    console.log(inputArr.join(" "));
  };

  const input = [];

  const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  readline.on("line", inputCb).on("close", closeCb);
}
