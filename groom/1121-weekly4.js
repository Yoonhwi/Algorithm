/**
 * Failed : 17 , 22번 테스트케이스 runtime error
 */
const readline = require("readline");
let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input = [];

rl.on("line", (line) => {
  input.push(line);
});

rl.on("close", () => {
  const [_x, _y] = input.shift().split(" ");
  const x = Number(_x);
  const y = Number(_y);

  const dict = [];

  const arr = input.map((v) => {
    const empty = [];
    for (let i = 0; i < v.length; i++) {
      empty.push(true);
    }
    dict.push(empty);
    return v.split("");
  });

  let pixelCount = 0;
  let maxPixelSize = 0;

  for (let i = 0; i < y; i++) {
    for (let j = 0; j < x; j++) {
      if (arr[i][j] === "#" && dict[i][j]) {
        const set = new Set();
        operate(i, j, dict, set);
        maxPixelSize = Math.max(maxPixelSize, set.size);
        pixelCount++;
      }
    }
  }

  function operate(i, j, dict, set) {
    if (
      i < 0 ||
      i >= y ||
      j < 0 ||
      j >= x ||
      !dict[i][j] ||
      arr[i][j] !== "#"
    ) {
      return false;
    }

    dict[i][j] = false;

    set.add(`${i}-${j}`);

    if (
      !operate(i - 1, j, dict, set) &&
      !operate(i, j - 1, dict, set) &&
      !operate(i + 1, j, dict, set) &&
      !operate(i, j + 1, dict, set)
    ) {
      return false;
    }
  }

  console.log(`${pixelCount}\n${maxPixelSize}`);
});
