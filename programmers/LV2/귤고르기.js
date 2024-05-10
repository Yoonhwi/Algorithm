function solution(k, tangerine) {
  let sum = 0;
  const object = {};
  tangerine.forEach((v) => {
    !object[v] ? (object[v] = 1) : object[v]++;
  });

  const values = Object.values(object);
  values.sort((a, b) => b - a);

  for (i = 0; i < values.length; i++) {
    sum += values[i];
    if (sum >= k) return i + 1;
  }
}

console.log(solution(4, [1, 3, 2, 5, 4, 5, 2, 3]));
