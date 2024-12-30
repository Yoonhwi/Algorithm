/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  if (nums.length === 1) {
    if (nums[0] === target) {
      return 0;
    } else {
      return -1;
    }
  }

  const pivot = getPivot(nums);
  let { left, right } = pointerSet(target, pivot, nums);

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (nums[right] === target) {
      return right;
    }

    if (nums[left] === target) {
      return left;
    }

    if (nums[mid] > target) {
      right = mid - 1;
    } else if (nums[mid] === target) {
      return mid;
    } else {
      left = mid + 1;
    }
  }

  return -1;
};

function getPivot(nums) {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    if (nums[mid] > nums[right]) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  if (left === nums.length - 1) {
    return 0;
  }

  return left;
}

function pointerSet(target, pivot, nums) {
  let left, right;

  if (target >= nums[0]) {
    if (pivot === 0) {
      right = nums.length - 1;
    } else {
      right = pivot - 1;
    }
    left = 0;
  } else {
    right = nums.length - 1;
    left = pivot;
  }

  return { left, right };
}

console.log(search([8, 9, 2, 3, 4], 9));
