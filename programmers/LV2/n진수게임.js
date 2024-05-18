function solution(n, t, m, p) {
  const dir = {
    10: "A",
    11: "B",
    12: "C",
    13: "D",
    14: "E",
    15: "F",
  };
  const arr = [];
  let i = 0;
  let result = "";

  while (arr.length < t * m) {
    let nstr = i.toString(n);
    for (j = 10; j <= 15; j++) {
      i % n == j && (nstr = dir[j]);
    }

    for (const word of nstr) {
      arr.push(word);
    }
    i++;
  }

  i = 0;
  while (result.length < t) {
    const num = p - 1 + i * m;
    result += arr[num];
    i++;
  }

  return result;
}
////점수 : 50점

function solution(n, t, m, p) {
  let str = "";
  let result = "";
  let cnt = 0;
  for (i = 0; str.length < t * m; i++) {
    str += i.toString(n).toUpperCase();
  }

  while (result.length < t) {
    const flattend = str.substring(cnt, cnt + m);
    result += flattend[p - 1];
    cnt += m;
  }

  return result;
}

console.log(solution2(16, 16, 2, 1));
// 02468aceACE111111
