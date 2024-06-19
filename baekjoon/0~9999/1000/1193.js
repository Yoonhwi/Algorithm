{
  const readline = require("readline");
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  let input = 0;
  let result = [];
  const inputCb = (line) => {
    input = Number(line);
  };

  const closeCb = () => {
    let count = 1;
    let x = 1;

    while (true) {
      if (input === 1) {
        console.log("1/1");
        break;
      } else {
        count += 1;
        if (x < input && input <= x + count) {
          result.push(input - x);
          result.push(count - input + x + 1);
          if (count % 2) {
            result.reverse();
          }
          break;
        }
        x += count;
      }
    }
    console.log(result.join("/"));
  };

  rl.on("line", inputCb).on("close", closeCb);
}
