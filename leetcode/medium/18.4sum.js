// /**
//  * @param {number[]} nums
//  * @param {number} target
//  * @return {number[][]}
//  * 실패 이유 : 4개의 원소가 같을때 모든경우의 수의 배열이 전부 result로 들어감.
//  * 1. sort 후 문자열로 바꿔서 set을 사용 => 숫자가 10이 넘어갔을때 두자리수를 인지하지 못함. 실패
//  * 2. result를 순회하며 동일한배열이 있는지 전부 검사 => time limit 실패
//  */
// var fourSum = function (nums, target) {
//   const result = [];
//   createArray(nums, [], target, result);

//   return result;
// };

// function createArray(nums, currentArr, target, result) {
//   if (currentArr.length === 4) {
//     const sum = currentArr.reduce((prev, curr) => {
//       return prev + curr;
//     });

//     if (sum === target) {
//       const sortedArr = currentArr.sort((a, b) => a - b);
//       if (!isArrayInResult(result, sortedArr)) {
//         result.push(sortedArr);
//       }
//     }
//     return;
//   }

//   for (let i = 0; i < nums.length; i++) {
//     const newArray = [...currentArr, nums[i]];
//     const splicedArr = [...nums.slice(0, i), ...nums.slice(i + 1)];
//     createArray(splicedArr, newArray, target, result);
//   }
// }

// function isArrayInResult(result, arr) {
//   return result.some((v) => JSON.stringify(v) === JSON.stringify(arr));
// }
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
  const length = nums.length;
  const result = [];
  nums = nums.sort((a, b) => a - b);

  for (let i = 0; i < length - 3; i++) {
    for (let j = i + 1; j < length - 2; j++) {
      for (let k = j + 1; k < length - 1; k++) {
        for (let l = k + 1; l < length; l++) {
          const sum = nums[i] + nums[j] + nums[k] + nums[l];
          if (target === sum) {
            result.push([nums[i], nums[j], nums[k], nums[l]]);
          }
        }
      }
    }
  }
  return result;
};

// 성공은 했지만 , 4중첩 for문으로 시간복잡도가 O(n^4) 입니다.
// 2중 for문과 two pointer 를 이용해 성능을 올릴 수 있습니다.

console.log(
  fourSum([7, 7, -1, -5, 2, -2, 8, -8, -10, 0, 1, -4, -1, 4, -6, 5, 4], -21)
);
console.log(fourSum([2, 2, 2, 2, 2], 6));
