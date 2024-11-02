/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
  const nums = [];

  for (let i = 0; i < tokens.length; i++) {
    const num = Number(tokens[i]);
    if (!isNaN(num)) {
      nums.push(num);
    } else {
      operate(tokens[i], nums);
    }
  }
  return nums[0];
};

function operate(oper, arr) {
  const B = arr.pop();
  const A = arr.pop();

  switch (oper) {
    case "+":
      arr.push(A + B);
      break;
    case "-":
      arr.push(A - B);
      break;
    case "*":
      arr.push(A * B);
      break;
    case "/":
      arr.push(Math.trunc(A / B));
      break;
  }
}

const tokens = [
  "10",
  "6",
  "9",
  "3",
  "+",
  "-11",
  "*",
  "/",
  "*",
  "17",
  "+",
  "5",
  "+",
];
// 10 6 -132
console.log(evalRPN(tokens));
