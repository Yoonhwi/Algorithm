function solution(numbers, target) {
  let result = 0;
  dfs(0, 0);
  function dfs(i, sum) {
    if (i === numbers.length) {
      sum === target && result++;
      return;
    }
    dfs(i + 1, sum + numbers[i]);
    dfs(i + 1, sum - numbers[i]);
  }
  return result;
}

console.log(solution([4, 1, 2, 1], 4));
