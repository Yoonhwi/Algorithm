function solution(priorities, location) {
  let answer = 0;

  const indexArr = priorities.map((v, i) => {
    return i;
  });

  while (priorities.length) {
    const max = Math.max(...priorities);
    const curr = priorities[0];
    if (curr < max) {
      indexArr.push(indexArr.shift());
      priorities.push(priorities.shift());
    } else {
      answer++;
      if (indexArr.shift() === location) return answer;
      priorities.shift();
    }
  }
}

console.log(solution([1, 1, 9, 1, 1, 1], 0));
