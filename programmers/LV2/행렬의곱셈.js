const testArr1 = [
  [1, 4],
  [3, 2],
  [4, 1],
];
const testArr2 = [
  [3, 3],
  [3, 3],
];

const test2Arr1 = [
  [2, 3, 2],
  [4, 2, 4],
  [3, 1, 4],
];

const test2Arr2 = [
  [5, 4, 3],
  [2, 4, 1],
  [3, 1, 1],
];
function solution(arr1, arr2) {
  let solution = [];

  arr1.forEach((v1, index) => {
    operate(v1, arr2, index, solution);
  });
  return solution;
}
function operate(arr1, arr2, index, result) {
  result.push([]);
  for (i = 0; i < arr2[0].length; i++) {
    let sum = 0;
    arr1.forEach((v1, i1) => {
      sum = sum + v1 * arr2[i1][i];
    });
    result[index].push(sum);
  }
}
solution(test2Arr1, test2Arr2);
