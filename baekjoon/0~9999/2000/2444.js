{
  const readline = require("readline");
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  let input = [];
  let result = [];

  const inputCb = (line) => {
    input.push(line);
  };

  const closeCb = () => {
    const count = Number(input[0]);
    addStar(count);
    result.map((v) => console.log(v));
    result = result.reverse();
    result.shift();
    result.map((v) => console.log(v));
  };

  const addStar = (num) => {
    let string = "";
    let count = num;
    while (count - 1) {
      string += " ";
      count--;
    }
    string += "*";
    result.push(string);
    for (i = 1; i < num; i++) {
      string = string.replace(" ", "") + "**";
      result.push(string);
    }
  };

  rl.on("line", inputCb).on("close", closeCb);
}
