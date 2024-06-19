{
  const readline = require("readline");
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  let input = [];
  let count = 0;

  const inputCb = (line) => {
    input = line.split(" ").map(Number);
  };

  const closeCb = () => {
    const up = input[0];
    const down = input[1];
    let goal = input[2];

    rest = (goal - up) % (up - down);
    goal = Math.floor((goal - up) / (up - down));

    if (goal < 1) {
      if (rest) {
        console.log(2);
      } else {
        console.log(1);
        return;
      }
    } else {
      goal += 1;
      if (rest) {
        console.log(goal + 1);
      } else {
        console.log(goal);
      }
    }
  };

  rl.on("line", inputCb).on("close", closeCb);
}
