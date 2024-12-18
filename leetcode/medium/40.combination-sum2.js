/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
  candidates.sort((a, b) => a - b);
  const result = [];

  const dfs = (arr, sum, idx) => {
    if (sum > target) return;
    if (sum === target) {
      result.push(arr);
    }

    for (let i = idx; i < candidates.length; i++) {
      if (candidates[i] > target) return;
      if (i !== idx && candidates[i] === candidates[i - 1]) continue;
      dfs([...arr, candidates[i]], sum + candidates[i], i + 1);
    }
  };

  dfs([], 0, 0);

  return result;
};

console.log(combinationSum2([10, 1, 2, 7, 6, 1, 5], 8));
