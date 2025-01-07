/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
  let count = 0;
  let maxDistance = 0;
  let currentDistance = 0;

  for (let i = 0; i < nums.length - 1; i++) {
    maxDistance = Math.max(maxDistance, i + nums[i]);

    if (i === currentDistance) {
      currentDistance = maxDistance;
      count++;
    }

    if (currentDistance >= nums.length - 1) {
      break;
    }
  }

  return count;
};

console.log(jump([2, 3, 1, 1, 4]));
