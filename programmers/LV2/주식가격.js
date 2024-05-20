function solution(prices) {
  const result = [];
  prices.forEach((v, i) => {
    if (i === prices.length - 1) {
      result.push(0);
      return;
    }
    const min = v;

    for (j = i + 1; j <= prices.length - 1; j++) {
      if (min > prices[j]) {
        result.push(j - i);
        break;
      } else {
        j === prices.length - 1 && result.push(j - i);
      }
    }
  });
  return result;
}

console.log(solution([1, 2, 3, 2, 3]));
