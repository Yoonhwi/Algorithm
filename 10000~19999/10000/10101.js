{
  const readline = require("readline");
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  let input = [];

  const inputCb = (line) => {
    input.push(Number(line));
  };

  const closeCb = () => {
    let sum = 0;
    input.map((e) => (sum += e));
    if (sum !== 180) {
      console.log("Error");
      return;
    } else {
      input = Array.from(new Set(input));
      if (input.length === 1) {
        console.log("Equilateral");
        return;
      } else if (input.length === 2) {
        console.log("Isosceles");
        return;
      } else {
        console.log("Scalene");
        return;
      }
    }
  };

  rl.on("line", inputCb).on("close", closeCb);
}
