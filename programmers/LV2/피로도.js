const k = 80;
const dungeons = [
  [80, 20],
  [50, 40],
  [30, 10],
];
//최소피로도 , 소모피로도

function solution(k, dungeons) {
  let count = 0;
  const visited = Array.from({ length: dungeons.length }, () => false);

  function dfs(x, num) {
    for (let i = 0; i < dungeons.length; i++) {
      if (x >= dungeons[i][0] && !visited[i]) {
        visited[i] = true;
        dfs(x - dungeons[i][1], num + 1);
        visited[i] = false;
      }
    }
    count = Math.max(count, num);
  }

  dfs(k, 0);
  return count;
}

console.log(solution(k, dungeons));
