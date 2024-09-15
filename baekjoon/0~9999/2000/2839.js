{
  const readline = require("readline");
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  let input = 0;

  const inputCb = (line) => {
    input = Number(line);
  };

  const closeCb = () => {
    let result = -1;
    let fiveSugar = Math.floor(input / 5);
    while (fiveSugar >= 0) {
      const remainder = input - fiveSugar * 5;
      if (remainder % 3 === 0) {
        result = fiveSugar + remainder / 3;
        break;
      }
      fiveSugar--;
    }
    console.log(result);
  };

  rl.on("line", inputCb).on("close", closeCb);
}

//   const closeCb = () => {
//     let result = -1;
//     const operate = (sugar, count) => {
//       if (sugar === 0) {
//         result >= 0 ? (result = Math.min(count, result)) : (result = count);
//       }
//       if (sugar < 3) return;
//       operate(sugar - 3, count + 1);
//       operate(sugar - 5, count + 1);
//     };

//     operate(input, 0);
//     console.log(result);
//   };
