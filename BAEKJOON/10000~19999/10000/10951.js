{
  const inputCb = (line) => {
    input.push(line);
  };

  const closeCb = () => {
    for (i = 0; i < input.length; i++) {
      opreate(input[i]);
    }
    process.exit();
  };
  const input = [];
  let set = [];
  const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  readline.on("line", inputCb).on("close", closeCb);

  function opreate(string) {
    set = string.split(" ").map(Number);
    console.log(set[0] + set[1]);
  }
}
