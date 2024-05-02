function solution(A, B) {
  let sum = 0;
  const a = A.sort((a, b) => a - b);
  const b = B.sort((a, b) => b - a);

  for (i = 0; i < a.length; i++) {
    sum += a[i] * b[i];
  }
  return sum;
}

solution(A, B);
