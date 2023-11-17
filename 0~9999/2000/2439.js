{
  const readline = require("readline");
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  let input = 0;
  let count = 0;
  const inputCb = (line) => {
    input = Number(line);
    count = input;
  };

  const closeCb = () => {
    showStar(addSpace(input));
  };

  rl.on("line", inputCb).on("close", closeCb);

  function addSpace(input) {
    let space = "";
    while (input - 1) {
      input--;
      space += " ";
    }
    return space;
  }

  function showStar(space) {
    let star = "";
    star = space + "*";
    for (i = 0; i < count; i++) {
      console.log(star);
      star = star.slice(1) + "*";
    }
  }
}
