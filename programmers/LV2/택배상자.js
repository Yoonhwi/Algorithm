//첫번째풀이
//시간초과
function failSolution(order) {
  let result = 0;
  let numberArr = Array.from({ length: order.length }, (_, i) => i + 1);
  const container = [];

  while (order.length) {
    if (order[0] === numberArr[0]) {
      result++;
      order.shift();
      numberArr.shift();
    } else {
      if (numberArr.includes(order[0])) {
        numberArr.forEach((v) => {
          v < order[0] && container.push(v);
        });
        numberArr = numberArr.filter((v) => v > order[0]);
        order.shift();
        result++;
      } else {
        if (container.pop() === order[0]) {
          order.shift();
          result++;
        } else {
          return result;
        }
      }
    }
  }

  return result;
}

//두번째
function solution(order) {
  let result = 0;
  const stack = [];

  for (i = 1; i <= order.length; i++) {
    stack.push(i);

    while (stack.length && stack.at(-1) === order[result]) {
      stack.pop();
      result++;
    }
  }
  return result;
}

console.log(solution([4, 3, 1, 2, 5]));
