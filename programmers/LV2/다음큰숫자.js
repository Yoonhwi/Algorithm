function solution(n) {
  let oneCount = 0;
  const numArr = n.toString(2).split("");
  numArr.forEach((v) => {
    v === "1" && oneCount++;
  });

  while (n++) {
    let count = 0;
    const nextArr = n.toString(2).split("");
    nextArr.forEach((v) => {
      v === "1" && count++;
    });
    if (oneCount === count) return n;
  }
}
//정규식으로 간단하게
function solution2(n) {
  const oneCount = n.toString(2).match(/1/g).length;
  while (n++) {
    if (oneCount === n.toString(2).match(/1/g).length) return n;
  }
}

solution2(15);
