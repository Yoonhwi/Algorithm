{
  const input = [];
  let rest = [];
  const inputCb = (line) => {
    input.push(Number(line));
  };

  const closeCb = () => {
    input.map((e) => {
      rest.push(e % 42);
    });
    rest = new Set(rest);
    console.log(rest.size);
  };

  const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  readline.on("line", inputCb).on("close", closeCb);
}
