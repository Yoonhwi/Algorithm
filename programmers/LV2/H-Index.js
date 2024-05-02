const citations = [3, 0, 6, 1, 5];

function solution(citations) {
  let answer = 0;
  answer = operate(citations, 0);
  return answer;
}

function operate(citations, num) {
  let count = 0;
  citations.forEach((value) => {
    value >= num ? count++ : count;
  });
  if (count >= num) {
    return operate(citations, num + 1);
  } else return num - 1;
}

solution(citations);
