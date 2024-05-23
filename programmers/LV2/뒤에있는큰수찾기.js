function solution(numbers) {
  const result = numbers.map((v, i) => {
    for (j = i; j < numbers.length; j++) {
      if (v < numbers[j]) {
        return numbers[j];
      }
      if (j === numbers.length - 1) return -1;
    }
  });
  return result;
}

//시간초과
//개선코드

function solution(numbers) {
  const stack = [];
  const result = new Array(numbers.length).fill(-1);

  numbers.forEach((v, i) => {
    while (stack.length && v > numbers[stack.at(-1)]) {
      result[stack.pop()] = v;
    }
    stack.push(i);
  });
  return result;
}

console.log(solution2([9, 1, 5, 3, 6, 2]));
