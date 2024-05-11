function solution(want, number, discount) {
  let result = 0;
  const dir = {};
  want.forEach((v, i) => {
    dir[v] = number[i];
  });

  for (i = 0; i < discount.length; i++) {
    const copy = { ...dir };

    const newDiscount = discount.slice(i, i + 10);
    let flag = 1;

    newDiscount.forEach((v) => {
      copy[v]--;
    });
    const values = Object.values(copy);
    values.forEach((v) => {
      v > 0 && (flag = 0);
    });
    flag && result++;
  }

  return result;
}

console.log(
  solution(
    ["banana", "apple", "rice", "pork", "pot"],
    [3, 2, 2, 2, 1],
    [
      "chicken",
      "apple",
      "apple",
      "banana",
      "rice",
      "apple",
      "pork",
      "banana",
      "pork",
      "rice",
      "pot",
      "banana",
      "apple",
      "banana",
    ]
  )
);
