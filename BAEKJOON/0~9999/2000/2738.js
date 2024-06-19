{
  const readline = require("readline");
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  let input = [];
  let result = [];

  const inputCb = (line) => {
    input.push(line.split(" ").map(Number));
  };

  const closeCb = () => {
    let [a, b] = input[0];
    input.shift();
    for (i = 0; i < a; i++) {
      result.push([]);
      for (j = 0; j < b; j++) {
        result[i].push(input[i][j] + input[i + a][j]);
      }
    }
    result.map((v) => {
      console.log(v.join(" "));
    });
  };

  rl.on("line", inputCb).on("close", closeCb);
}
