function solution(dirs) {
  let count = 0;
  const dir = {
    U: [0, 1],
    D: [0, -1],
    R: [1, 0],
    L: [-1, 0],
  };

  const match = {
    U: "D",
    D: "U",
    R: "L",
    L: "R",
  };

  const walk = [];

  const location = [0, 0];
  for (const word of dirs) {
    const [x, y] = dir[word];
    if (location[0] + x > 5 || location[0] + x < -5) continue;
    if (location[1] + y > 5 || location[1] + y < -5) continue;
    if (
      walk.some(
        (item) =>
          item[0] === location[0] && item[1] === location[1] && item[2] === word
      ) ||
      walk.some(
        (item) =>
          item[0] === location[0] + x &&
          item[1] === location[1] + y &&
          item[2] === match[word]
      )
    ) {
    } else {
      count++;
      walk.push([location[0], location[1], word]);
    }
    location[0] += x;
    location[1] += y;
  }
  return count;
}

console.log(solution("ULURRDLLU"));
