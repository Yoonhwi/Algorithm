/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let idx = nums.length - 1;

  while (idx > 0) {
    if (nums[idx] === nums[idx - 1]) {
      nums.splice(idx, 1);
    }
    idx--;
  }

  return nums.length;
};

console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
