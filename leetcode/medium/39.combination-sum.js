/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  const result = [];
  const dfs = (arr, sum) => {
    if (sum > target) return;
    if (sum === target) {
      result.push(arr);
      return;
    }

    for (let i = 0; i < candidates.length; i++) {
      if (arr.length && arr[arr.length - 1] > candidates[i]) {
        continue;
      }
      dfs([...arr, candidates[i]], sum + candidates[i]);
    }
  };

  dfs([], 0);
  return result;
};

console.log(combinationSum([2, 3, 6, 7], 7));
console.log(combinationSum([2, 3, 5], 8));
