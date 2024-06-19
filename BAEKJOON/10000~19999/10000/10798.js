{
  const readline = require("readline");
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  let input = [];
  let maxLength = 0;
  const inputCb = (line) => {
    input.push(line.split(""));
  };

  const closeCb = () => {
    let word = "";
    input.map((e) => (e.length > maxLength ? (maxLength = e.length) : null));
    for (i = 0; i < maxLength; i++) {
      for (j = 0; j < input.length; j++) {
        if (input[j][i] != undefined) {
          word += input[j][i];
        }
      }
    }
    console.log(word);
  };

  rl.on("line", inputCb).on("close", closeCb);
}
