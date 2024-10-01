// /**
//  *  O(n^2) time limit
//  * @param {number[]} height
//  * @return {number}
//  */
// var maxArea = function (height) {
//   let result = 0;
//   for (let i = 0; i < height.length - 1; i++) {
//     for (let j = i + 1; j < height.length; j++) {
//       result = Math.max(Math.min(height[i], height[j]) * (j - i), result);
//     }
//   }
//   return result;
// };

var maxArea = function (height) {
  let left = 0;
  let right = height.length - 1;
  let result = 0;

  while (left < right) {
    result = Math.max(
      Math.min(height[left], height[right]) * (right - left),
      result
    );

    if (height[left] > height[right]) {
      right--;
    } else {
      left++;
    }
  }

  return result;
};

const testCase = [1, 8, 6, 2, 5, 4, 8, 3, 7]; // output : 49
console.log(maxArea(testCase));
