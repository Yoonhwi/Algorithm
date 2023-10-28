let fs = require("fs");
let filepath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filepath).toString().split("\n");
const number = Number(input[0]);
const factorial = (num) => {
  let result = num;
  if (num <= 1) {
    return 1;
  }
  while (num > 1) {
    result *= num - 1;
    num--;
  }
  return result;
};
console.log(factorial(number));
