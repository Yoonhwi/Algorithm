function solution(brown, yellow) {
  for (i = 1; i <= yellow; i++) {
    if (yellow % i === 0) {
      const row = i;
      const column = yellow / i;
      if ((column + 2) * (row + 2) - column * row === brown) {
        return [column + 2, row + 2];
      }
    }
  }
}

console.log(solution(24, 24));
