/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function (n, trust) {
  const memo = Array.from({ length: n + 1 }, () => false);
  const dict = {};

  if (n === 1 && !trust.length) {
    return n;
  }

  for (let i = 0; i < trust.length; i++) {
    const [a, b] = trust[i];
    memo[a] = true;

    dict[b] = (dict[b] ?? 0) + 1;
  }

  for (const [person, value] of Object.entries(dict)) {
    if (value === n - 1 && !memo[person]) {
      return Number(person);
    }
  }

  return -1;
};

console.log(findJudge(2, [[1, 2]]));
