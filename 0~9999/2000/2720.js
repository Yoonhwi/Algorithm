let fs = require("fs");
let filepath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filepath).toString().split("\n");

const result = (change) => {
  let count = [0, 0, 0, 0];
  let money = [25, 10, 5, 1];
  for (let i = 0; i < money.length; i++) {
    count[i] += Math.floor(change / money[i]);
    change %= money[i];
  }
  return count.join(" ");
};
for (let i = 1; i < input.length; i++) {
  console.log(result(input[i]));
}
