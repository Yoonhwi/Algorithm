{
  const input = [];
  const inputCb = (line) => {
    input.push(Number(line));
  };

  const closeCb = () => {
    let count = 0;
    let max = 0;
    input.map((num, index) => {
      if (num > max) {
        max = num;
        count = index + 1;
      }
    });
    console.log(`${max}\n${count}`);
  };

  const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  readline.on("line", inputCb).on("close", closeCb);
}
