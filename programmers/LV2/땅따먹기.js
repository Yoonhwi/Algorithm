//첫번째 풀이
//이전 index를 기억해가며 다음행에서 이전index를 제외하고 최대값을 더해나갑니다.
function failSolution(land) {
  let result = 0;
  let prevIdx = -1;

  for (i = 0; i < land.length; i++) {
    const arr = [...land[i]];
    if (prevIdx >= 0) {
      arr.splice(prevIdx, 1);
    }
    const max = Math.max(...arr);
    result += max;
    const idx = land[i].indexOf(max);
    prevIdx = idx;
  }

  return result;
}

//두번째 풀이
//DFS로 전체 경우의 수의 최대합
//시간초과
function failDfs(land) {
  let max = 0;
  const columnLength = land[0].length;
  for (let i = 0; i < columnLength; i++) {
    oper(1, i, land[0][i]);
  }

  function oper(row, prevIdx, sum) {
    if (row >= land.length) {
      max = Math.max(sum, max);
      return;
    }
    for (let j = 0; j < columnLength; j++) {
      if (prevIdx === j) continue;
      oper(row + 1, j, sum + land[row][j]);
    }
  }

  return max;
}

//DP
function solution(land) {
  const rowCount = land.length;
  const columnCount = land[0].length;
  const dp = Array.from({ length: rowCount }, () => Array(columnCount).fill(0));
  dp[0] = [...land[0]];

  for (let i = 1; i < rowCount; i++) {
    for (let j = 0; j < columnCount; j++) {
      const maxPrev = Math.max(...dp[i - 1].filter((_, idx) => idx !== j));
      dp[i][j] = land[i][j] + maxPrev;
    }
  }
  return Math.max(...dp[rowCount - 1]);
}

console.log(
  solution([
    [1, 2, 3, 5],
    [5, 6, 7, 8],
    [4, 3, 2, 1],
  ])
);
