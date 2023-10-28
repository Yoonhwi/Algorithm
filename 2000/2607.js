let fs = require("fs");
let filepath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filepath).toString().split("\n");
input.shift();
input.map((item, index) => {
  input[index] = item.replace("\r", "");
});
let result = 0;
const word = input[0].toString().split("");
input.shift();
for (i = 0; i < input.length; i++) {
  let word2 = input[i].toString().split("");
  let word3;
  if (word.length > word2.length) {
    word3 = [...word];
  } else {
    word3 = [...word2];
    word2 = [...word];
  }
  for (j = 0; j < word2.length; j++) {
    for (k = 0; k < word3.length; k++) {
      if (word2[j] === word3[k]) {
        word3.splice(k, 1);
        k--;
        break;
      }
    }
  }
  word3.length <= 1 ? result++ : result;
}
console.log(result);
