let result = 1;

function solution(n) {
  for (i = 1; i < n / 2; i++) {
    operate(i, n);
  }
  return result;
}

function operate(num, n) {
  let sum = 0;
  while (num <= n) {
    sum += num;
    if (sum >= n) {
      if (sum === n) {
        result++;
      } else return;
    }
    num++;
  }
}

solution(15);
