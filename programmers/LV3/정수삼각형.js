// //시간초과
// function solution(triangle) {
//   let max = 0;

//   function dfs(sum, row, i) {
//     sum > max && (max = sum);
//     if (row >= triangle.length) return;

//     dfs(sum + triangle[row][i], row + 1, i);
//     dfs(sum + triangle[row][i + 1], row + 1, i + 1);
//   }

//   dfs(triangle[0][0], 1, 0);

//   return max;
// }

function solution(triangle) {
  const dp = triangle.slice();

  for (let i = dp.length - 2; i >= 0; i--) {
    for (let j = 0; j < dp[i].length; j++) {
      dp[i][j] += Math.max(dp[i + 1][j], dp[i + 1][j + 1]);
    }
  }

  return dp[0][0];
}

console.log(solution([[7], [3, 8], [8, 1, 0], [2, 7, 4, 4], [4, 5, 2, 6, 5]]));
