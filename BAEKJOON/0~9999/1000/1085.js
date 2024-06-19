{
  const readline = require("readline");
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  let input = [];

  const inputCb = (line) => {
    input = line.split(" ").map(Number);
  };

  const closeCb = () => {
    const [x, y, w, h] = input;
    let distanceY = 0;
    let distanceX = 0;
    y > h - y ? (distanceY = h - y) : (distanceY = y);
    x > w - x ? (distanceX = w - x) : (distanceX = x);
    distanceX > distanceY ? console.log(distanceY) : console.log(distanceX);
  };

  rl.on("line", inputCb).on("close", closeCb);
}
