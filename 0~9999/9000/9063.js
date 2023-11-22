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
    let x = [];
    let y = [];
    input.shift();
    if (input.length === 1) {
      console.log(0);
      return;
    }

    for (i = 0; i < input.length; i++) {
      x.push(input[i][0]);
      y.push(input[i][1]);
    }
    const MaxX = Math.max.apply(null, x);
    const MinX = Math.min.apply(null, x);

    const MaxY = Math.max.apply(null, y);
    const MinY = Math.min.apply(null, y);

    console.log(Math.abs(MaxX - MinX) * Math.abs(MaxY - MinY));
  };

  rl.on("line", inputCb).on("close", closeCb);
}
