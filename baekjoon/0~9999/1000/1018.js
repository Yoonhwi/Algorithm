{
  const readline = require("readline");
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  let input = [];

  const black = [
    "BWBWBWBW",
    "WBWBWBWB",
    "BWBWBWBW",
    "WBWBWBWB",
    "BWBWBWBW",
    "WBWBWBWB",
    "BWBWBWBW",
    "WBWBWBWB",
  ];

  const white = [
    "WBWBWBWB",
    "BWBWBWBW",
    "WBWBWBWB",
    "BWBWBWBW",
    "WBWBWBWB",
    "BWBWBWBW",
    "WBWBWBWB",
    "BWBWBWBW",
  ];

  const inputCb = (line) => {
    input.push(line);
  };

  const closeCb = () => {
    const [x, y] = input.shift().split(" ");
    let answer = 64;

    const operate = (x, y) => {
      let whiteCount = 0;
      let blackCount = 0;
      for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
          white[i][j] !== input[x + i][y + j] && whiteCount++;
          black[i][j] !== input[x + i][y + j] && blackCount++;
        }
      }
      return Math.min(whiteCount, blackCount);
    };

    for (let i = 0; i < x - 7; i++) {
      for (let j = 0; j < y - 7; j++) {
        answer = Math.min(answer, operate(i, j));
      }
    }

    console.log(answer);
  };

  rl.on("line", inputCb).on("close", closeCb);
}
