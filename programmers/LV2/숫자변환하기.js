/**
 * x를 y로 변환하기 위해 필요한 최소 연산 횟수를 반환 만들수없다면 -1
 * 가능한 연산 3가지
 * x+n / x*2 / x*3
 * @param {number} x
 * @param {number} y
 * @param {number} n
 * @returns {number}
 */
function solution(x, y, n) {
  if (x === y) return 0;
  let result = -1;

  function operate(x, y, n, count) {
    count++;
    if (x + n === y || 2 * x === y || 3 * x === y) {
      if (result < 0) result = count;
      else result = Math.min(result, count);
      return;
    }
    if (x > y) return;
    operate(x + n, y, n, count);
    operate(2 * x, y, n, count);
    operate(3 * x, y, n, count);
  }
  operate(x, y, n, 0);
  return result;
}
//DFS 실패 시간초과

console.log(solution(10, 40, 5)); //2
