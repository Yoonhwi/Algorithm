function solution(n) {
  const arr = [1, 2];

  if (n === 1) return 1;
  if (n === 2) return 2;

  for (i = 0; i < n - 2; i++) {
    arr.push((arr[arr.length - 2] + arr[arr.length - 1]) % 1234567);
  }
  return arr[arr.length - 1];
}

console.log(solution(100));
