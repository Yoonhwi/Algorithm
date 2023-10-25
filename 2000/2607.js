let fs = require("fs");
let filepath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filepath).toString().split("\n");
input.shift();
input.map((item, index) => {
  input[index] = item.replace("\r", "");
});
count = 0;
result = 0;
let word4 = input[0].toString().split("");
let word = [...new Set(word4)];
input.shift();
for (i = 0; i < input.length; i++) {
  let word3 = input[i].toString().split("");
  let word2 = [...new Set(word3)];
  for (j = 0; j < word2.length; j++) {
    for (k = 0; k < word.length; k++) {
      if (word2[j] === word[k]) {
        count++;
      }
    }
  }
  if (word2.length > 1) {
    if (word2.length > word.length) {
      count >= word2.length - 1 ? result++ : result;
    } else {
      count >= word.length - 1 ? result++ : result;
    }
  } else {
    if (word2.length > word.length) {
      count >= word2.length - 1 ? result++ : result;
    } else {
      count >= word.length - 1 ? result++ : result;
    }
  }
  console.log(word);
  console.log(word2.length, word.length);
  console.log(result);
  count = 0;
}
console.log(result);
