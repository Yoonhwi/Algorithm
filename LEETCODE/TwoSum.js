/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

//input: array of numbers, target number
//output: array of two numbers that add up to target number

var twoSum = function (nums, target) {
  for (i = 0; i < nums.length - 1; i++) {
    for (j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
};

// 시간복잡도 : O(n^2)
// runtime : 139ms

function twoSum2(nums, target) {
  const dir = {};
  for (i = 0; i < nums.length; i++) {
    const curr = nums[i];
    const match = target - curr;
    if (match in dir) {
      return [dir[match], i];
    } else {
      dir[curr] = i;
    }
  }
}

console.log(twoSum2([2, 7, 11, 15], 9));
