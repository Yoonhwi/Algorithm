let fs = require("fs");
let filepath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filepath).toString().split("\n");
input.forEach((item, index) => (input[index] = item.replace("\r", "")));
let mirror;
let mirrorArr = [];
let result = 0;
const number = input[0].toString().split(" ");
const column = number[0]; // 행
const row = number[1]; //열
input.shift();
for (k = 0; k < column; k++) {
  let target = input[k].toString().split("");
  mirrorArr[k] = [];
  for (x = 0; x < row; x++) {
    mirrorArr[k][x] = target[x];
  }
}
let i = 0;
let j = 0;
while (i !== column - 1 || j !== row - 1) {
  if (mirrorArr[i][j] === "1") {
    console.log("1");
    result++;
    if (mirrorArr[i][j + 1] === "1") {
      j++;
      result++;
    }
    if (mirrorArr[i + 1][j] === "1") {
      i++;
      result++;
    }
    if (mirrorArr[i][j + 1] !== "1" && mirrorArr[i + 1][j] !== "1") {
      if (mirrorArr[i - 1][j] === "1") {
        i--;
        result++;
      }
    }
    if (mirrorArr[i][j + 1] === "1" && mirrorArr[i + 1][j] === "1") {
      console.log("i:", i, "j:", j);
    }
  }
}
