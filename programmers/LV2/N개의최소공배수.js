function solution(arr) {
  const array = arr.sort((a, b) => a - b);
  let max = array[array.length - 1];
  let i = 1;

  while (true) {
    let isMultiple = true;
    const findNum = max * i;
    array.forEach((v) => {
      findNum % v !== 0 && (isMultiple = false);
    });
    if (isMultiple) return max * i;
    i++;
  }
}

console.log(solution([2, 8, 6, 14]));
