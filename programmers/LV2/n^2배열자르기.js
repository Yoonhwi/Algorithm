function solution(n, left, right) {
  const result = [];
  for (i = 0; i < n; i++) {
    if ((i + 1) * n < left) continue;
    for (j = 0; j < n; j++) {
      if (left <= i * n + j && i * n + j <= right) {
        j < i ? result.push(i + 1) : result.push(j + 1);
      }
      if (i * n + j + 1 > right) return result;
    }
  }
  return result;
}

console.log(solution(3, 2, 5));
