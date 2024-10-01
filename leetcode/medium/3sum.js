// /**
//  * O(n^3) time limit
//  * @param {number[]} nums
//  * @return {number[][]}
//  */
// var threeSum = function (nums) {
//   const result = [];
//   for (let i = 0; i < nums.length - 2; i++) {
//     for (let j = i + 1; j < nums.length - 1; j++) {
//       for (let k = j + 1; k < nums.length; k++) {
//         if (nums[i] + nums[j] + nums[k] === 0) {
//           result.push([nums[i], nums[j], nums[k]]);
//         }
//       }
//     }
//   }

//   const uniqueResult = new Set(
//     result.map((arr) => {
//       return arr.sort((a, b) => a - b).join(",");
//     })
//   );

//   return [...uniqueResult].map((arr) => {
//     return arr.split(",").map(Number);
//   });
// };

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  const result = [];
  let left = 0;
  let right = 0;

  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    left = i + 1;
    right = nums.length - 1;

    while (right > left) {
      const sum = nums[i] + nums[left] + nums[right];
      if (sum === 0) {
        result.push([nums[i], nums[left], nums[right]]);
        while (left < right && nums[left] === nums[left + 1]) left++;
        while (left < right && nums[right] === nums[right - 1]) right--;
        left++;
        right--;
      } else if (sum > 0) {
        right--;
      } else {
        left++;
      }
    }
  }

  return result;
};

const testCase = [-1, 0, 1, 2, -1, -4]; // output : [[-1,-1,2],[-1,0,1]]
console.log(threeSum(testCase));
