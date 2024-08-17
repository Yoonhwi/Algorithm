/**
 *
 * @param {number} n
 * @returns {number}
 */
function solution(n) {
  const arr = [1, 1];
  for (let i = 2; i <= n; i++) {
    arr[i] = (arr[i - 2] + arr[i - 1]) % 1000000007;
  }
  return arr[n];
}
//시간초과

function solution(n) {
  const arr = Array(n).fill(0);
  const mod = 1000000007;
  arr[1] = 1;
  arr[2] = 2;

  for (let i = 3; i <= n; i++) {
    arr[i] = (arr[i - 2] + arr[i - 1]) % mod;
  }
  return arr[n];
}

console.log(solution(4));
