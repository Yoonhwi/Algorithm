const n = 8;
const a = 4;
const b = 7;

//2의 거듭제곱만큼 라운드가 진행됨
//n이 32일때 반인 16 에서 갈라지면 마지막에 만나게됨
function solution(n, a, b) {
  let num = 0;
  let temp = n;
  while (temp !== 1) {
    temp = Math.ceil(temp / 2);
    num++;
  }
  let answer = operate(n, a, b, 0, num);
  return answer;
}
function operate(n, a, b, num2, num) {
  let temp = n / 2;
  if ((temp >= a && temp >= b) || (temp < a && temp < b)) {
    return operate(temp, a, b, num2 + 1, num - 1);
  } else {
    return num;
  }
}

/////런타임에러 발생

function solution2(n, a, b) {
  let answer = 0;
  while (a !== b) {
    a = Math.ceil(a / 2);
    b = Math.ceil(b / 2);
    answer++;
  }
  return answer;
}

solution(n, a, b);
