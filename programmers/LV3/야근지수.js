function solution(n, works) {
  const dir = {};
  const set = new Set(works);
  let max = 0;
  let result = 0;

  works.forEach((v) => {
    dir[v] = (dir[v] ?? 0) + 1;
    v > max && (max = v);
  });

  while (n > 0) {
    if (max <= 0) return 0;
    dir[max]--;
    dir[max - 1] = (dir[max - 1] ?? 0) + 1;
    set.add(max - 1);
    if (dir[max] === 0) {
      set.delete(max);
      const setArray = Array.from(set);
      max = Math.max(...setArray);
    }
    n--;
  }
  console.log(dir);
  for (const [key, value] of Object.entries(dir)) {
    if (value === 0) continue;
    result += key * key * value;
  }

  return result;
}

console.log(solution(3, [1, 1]));
