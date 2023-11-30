const input = [".#...", "..#..", "...#."];
function solution(wallpaper) {
  let minX = wallpaper[0].length,
    minY = wallpaper.length,
    maxX = 0,
    maxY = 0;
  wallpaper.forEach((v1, idx1) => {
    v1.split("").forEach((v2, idx2) => {
      if (v2 === "#") {
        minY > idx1 ? (minY = idx1) : null;
        maxY <= idx1 ? (maxY = idx1) : null;

        minX > idx2 ? (minX = idx2) : null;
        maxX <= idx2 ? (maxX = idx2) : null;
      }
    });
  });
  return [minY, minX, maxY + 1, maxX + 1];
}

solution(input);
