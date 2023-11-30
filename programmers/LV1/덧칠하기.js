const n = 4;
const m = 1;
const section = [1, 2, 3, 4];

function solution(n, m, section) {
  const result = [];
  let count = 0;
  for (i = 1; i <= n; i++) {
    if (section[0] === i) {
      result.push(1);
      section.shift();
    } else {
      result.push(0);
    }
  }

  for (i = 0; i < result.length; i++) {
    if (result[i] === 1) {
      count++;
      i += m - 1;
    }
  }
  return count;
}

solution(n, m, section);
