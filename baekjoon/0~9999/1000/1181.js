{
  const readline = require("readline");
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  let input = [];

  const inputCb = (line) => {
    input.push(line);
  };

  const closeCb = () => {
    input.shift();

    input.sort((a, b) => {
      if (a.length < b.length) return -1;
      if (a.length === b.length && a < b) return -1;
    });

    const set = new Set(input);

    console.log([...set].join("\n"));
  };

  rl.on("line", inputCb).on("close", closeCb);
}
