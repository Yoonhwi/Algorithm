function solution(clothes) {
  const dir = {};
  let result = 1;

  clothes.forEach((v) => {
    const [name, type] = v;
    dir[type] = dir[type] || 0 + 1;
  });

  const countArr = Object.values(dir);
  countArr.forEach((v) => {
    result *= v + 1;
  });

  return result - 1;
}

console.log(
  solution([
    ["yellow_hat", "headgear"],
    ["blue_sunglasses", "eyewear"],
    ["green_turban", "headgear"],
  ])
);
