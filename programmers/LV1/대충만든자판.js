const keymap = ["ABACD", "BCEFD"];
const targets = ["XABCD", "AABB"];

function solution(keymap, targets) {
  let result = [];
  targets.forEach((v1) => {
    let sum = 0;
    const check = v1.split("").some((v2) => {
      if (operate(v2, keymap) === -1) {
        result.push(-1);
        return true;
      }
      sum += operate(v2, keymap);
    });
    if (!check) {
      result.push(sum);
    }
    sum = 0;
  });
  console.log(result);
}

function operate(word, array) {
  let min = -1;
  array.forEach((v1) => {
    v1.split("").forEach((v2, idx2) => {
      if (word === v2) {
        if (min === -1 || idx2 + 1 < min) {
          min = idx2 + 1;
        }
      }
    });
  });
  return min;
}

solution(keymap, targets);
