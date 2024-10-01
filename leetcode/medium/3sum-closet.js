/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
  let result = nums[0] + nums[1] + nums[2];
  let left = 0;
  let right = nums.length - 1;

  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i++) {
    left = i + 1;
    right = nums.length - 1;

    while (right > left) {
      const sum = nums[i] + nums[left] + nums[right];

      console.log(i, left, right, sum);

      if (Math.abs(target - result) > Math.abs(target - sum)) {
        result = sum;
      }

      if (sum === target) {
        return sum;
      } else if (sum > target) {
        right--;
      } else {
        left++;
      }
    }
  }
  return result;
};

const testNums = [0, 3, 97, 102, 200];
const testTarget = 300;

console.log(threeSumClosest(testNums, testTarget));
