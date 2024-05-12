function solution(priorities, location) {
  let result = 0;
  let target = location;
  const arr = [...priorities].sort((a, b) => b - a);
  let max = arr.shift();

  for (i = 0; i < priorities.length; i++) {
    if (priorities[i] >= max) {
      result++;
      if (i === target) return result;
      max = arr.shift();
      priorities.shift();
      target = target > 0 ? target - 1 : arr.length;
      i = 0;
    } else {
      target = target > 0 ? target - 1 : arr.length;
      const first = priorities.shift();
      priorities.push(first);
    }
    console.log(priorities, result, target);
  }

  return result;
}

console.log(solution([2, 1, 3, 2], 2));
