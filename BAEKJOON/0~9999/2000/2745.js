{
  const readline = require("readline");
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  let input = [];
  let sum = 0;

  const inputCb = (line) => {
    input = line.split(" ");
  };

  const closeCb = () => {
    operate();
  };

  const operate = () => {
    const word = input[0].split("");
    const number = Number(input[1]);
    const length = word.length;

    for (i = 0; i < length; i++) {
      if (!Number(word[i]) && word[i] !== "0") {
        sum += (word[i].charCodeAt() - 55) * square(i, length, number);
      } else {
        sum += Number(word[i]) * square(i, length, number);
      }
    }
    console.log(sum);
  };

  const square = (index, length, number) => {
    let inputNumb = number;
    if (length - 1 - index < 0) return 0;
    if (length - 1 - index === 0) return 1;
    if (length - 1 - index === 1) return number;
    for (j = 2; j < length - index; j++) {
      number *= inputNumb;
    }
    return number;
  };

  rl.on("line", inputCb).on("close", closeCb);
}
