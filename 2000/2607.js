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
  let word3 = [...word];
  if (word2 === word3) continue;
  if (word2.length > word3.length) {
    for (j = 0; j < word3.length; j++) {
      for (k = 0; k < word2.length; k++) {
        if (word3[j] === word2[k]) {
          word2.splice(k, 1);
          k--;
          break;
        }
      }
    }
    word2.length <= 1 ? result++ : result;
  } else {
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
}
console.log(result);
