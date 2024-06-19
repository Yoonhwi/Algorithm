let fs = require("fs");
let filepath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filepath).toString().split("\n");
let input2 = input[1].toString().split(" ");
var newArr = input2.map(Number);

let count = 1;
let result = 0;

for (i = 0; i < newArr.length; i++) {
  if (newArr[i] === 1) {
    result + count;
    count++;
  } else {
    count = 1;
  }
}
console.log(result);
