/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function (nums) {
  const set = new Set();
  for (const num of nums) {
    if (num > 0) set.add(num);
  }

  let i = 1;

  while (true) {
    if (!set.has(i)) return i;
    i++;
  }
};

const nums = [1, 2, 0];

console.log(firstMissingPositive(nums));
