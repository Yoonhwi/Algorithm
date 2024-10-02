function solution(arr) {
  let current = null;
  const result = [];

  for (const num of arr) {
    if (current !== num) {
      current = num;
      result.push(num);
    }
  }

  return result;
}

const testArr1 = [1, 1, 3, 3, 0, 1, 1]; // output : [1,3,0,1]

console.log(solution(testArr1));
