// /**
//  * @param {number[]} nums
//  * @return {number[][]}
//  */
// var permuteUnique = function (nums) {
//   const dict = new Set();
//   const dfs = (arr, memo) => {
//     if (arr.length === nums.length) {
//       dict.add(arr.join(","));
//       return;
//     }

//     for (let i = 0; i < nums.length; i++) {
//       if (memo.includes(i)) continue;
//       dfs([...arr, nums[i]], [...memo, i]);
//     }
//   };

//   dfs([], []);

//   const result = [];
//   for (const str of dict) {
//     result.push(str.split(",").map(Number));
//   }
//   return result;
// };

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
  nums.sort((a, b) => a - b);
  const N = nums.length;
  const result = [];
  const used = Array.from({ length: N }, () => false);

  const dfs = (current) => {
    if (current.length === N) {
      result.push([...current]);
      return;
    }

    for (let i = 0; i < N; i++) {
      if (used[i]) continue;
      if (nums[i] === nums[i - 1] && !used[i - 1]) continue;

      used[i] = true;
      current.push(nums[i]);
      dfs(current);

      current.pop();
      used[i] = false;
    }
  };

  dfs([]);
  return result;
};

console.log(permuteUnique([3, 3, 0, 3]));
