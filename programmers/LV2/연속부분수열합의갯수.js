function solution(elements) {
  const set = new Set();
  for (i = 1; i <= elements.length; i++) {
    for (j = 0; j < elements.length; j++) {
      let a = elements.slice(j, j + i);
      if (i + j > elements.length) {
        a = [...a, ...elements.slice(0, j + i - elements.length)];
      }
      set.add(a.reduce((acc, cur) => acc + cur));
    }
  }
  return set.size;
}

console.log(solution([7, 9, 1, 1, 4]));
