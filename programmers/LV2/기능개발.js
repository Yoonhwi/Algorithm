function solution(progresses, speeds) {
  const day = [];
  let result = [];
  progresses.forEach((v, i) => {
    let count = 0;
    while (++count) {
      if (speeds[i] * count >= 100 - v) {
        return day.push(count);
      }
    }
  });

  let max = day[0];
  let count = 1;
  for (i = 1; i < day.length; i++) {
    if (day[i] <= max) count++;
    else {
      max = day[i];
      result.push(count);
      count = 1;
    }
  }
  result.push(count);

  return result;
}

console.log(solution([93, 30, 55], [1, 30, 5]));
