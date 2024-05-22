function solution(topping) {
  let result = 0;
  const brother = new Set();
  const me = new Set();
  const arr = new Array(10001).fill(0);

  topping.forEach((v) => {
    me.add(v);
    arr[v]++;
  });

  for (i = 0; i < topping.length; i++) {
    const value = topping[i];

    if (arr[value] > 1) {
      arr[value]--;
    } else {
      me.delete(value);
    }
    brother.add(value);

    if (me.size === brother.size) {
      result++;
    }
  }
  return result;
}

console.log(solution([1, 2, 1, 3, 1, 4, 1, 2]));
