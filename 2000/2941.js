let fs = require("fs");
let filepath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filepath).toString().split("\n");
let word = input[0];
const croatia = ["c=", "c-", "dz=", "d-", "lj", "nj", "s=", "z="];
croatia.map((item) => {
  while (word.includes(item)) {
    word = word.replace(item, 1);
  }
});
// => forEach문
// forEach문도 while문과 마찬가지로 배열의 요소를 순회하며 반복문을 실행한다.
croatia.forEach((item) => (word = word.replace(item, 1)));

console.log(word.length);
