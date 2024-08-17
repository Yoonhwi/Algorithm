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

function solution(x, y, n) {
  const que = [[y, 0]];

  while (que.length) {
    let [num, cnt] = que.shift();
    if (num === x) return cnt;
    if (num > x || num % 3 === 0) que.push([num / 3, cnt + 1]);
    if (num > x || num % 2 === 0) que.push([num / 2, cnt + 1]);
    if (num - n >= x) que.push([num - n, cnt + 1]);
  }

  return -1;
}
//BFS 실패 시간초과

function solution(x, y, n) {
  const dp = new Array(y + 1).fill(Infinity);
  dp[x] = 0;

  for (let i = x; i <= y; i++) {
    dp[i + n] = Math.min(dp[i + n], dp[i] + 1);
    dp[i * 2] = Math.min(dp[i * 2], dp[i] + 1);
    dp[i * 3] = Math.min(dp[i * 3], dp[i] + 1);
  }

  return dp[y] !== Infinity ? dp[y] : -1;
}

console.log(solution(10, 40, 5)); //2
