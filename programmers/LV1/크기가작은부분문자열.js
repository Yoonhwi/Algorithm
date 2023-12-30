function solution(t, p) {
  var answer = 0;
  const arrayT = t.split("").map(Number);
  while (arrayT.length >= p.length) {
    const operArray = [];
    arrayT.forEach((v, i) => {
      if (i < p.length) operArray.push(v);
    });
    Number(operArray.join("")) <= Number(p) ? answer++ : answer;
    arrayT.shift();
  }
  return answer;
}
solution(t, p);
