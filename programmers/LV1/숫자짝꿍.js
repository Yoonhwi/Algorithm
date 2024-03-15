function solution(X, Y) {
  let answer = "";
  const xDict = operate(X);
  const yDict = operate(Y);

  for (i = 9; i >= 0; i--) {
    if (xDict[i] && yDict[i]) {
      const min = Math.min(xDict[i], yDict[i]);
      answer += i.toString().repeat(min);
    }
  }

  if (!answer.length) return "-1";
  if (answer[0] === "0") return "0";

  return answer;
}

function operate(word) {
  const dict = {};
  [...word].forEach((v) => {
    dict[v] ? dict[v]++ : (dict[v] = 1);
  });
  return dict;
}

solution(X, Y);
