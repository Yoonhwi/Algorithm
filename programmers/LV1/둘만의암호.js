const S = "ybcde";
const SKIP = "az";
const INDEX = 1;

function solution(s, skip, index) {
  let result = [];
  let sArray = s.split("").map((v) => v.charCodeAt());
  let skipArray = skip.split("").map((v) => v.charCodeAt());

  sArray.forEach((v1) => {
    let num = index;
    while (num) {
      v1++;
      v1 > 122 ? (v1 -= 26) : v1;
      for (let i = 0; i < skipArray.length; i++) {
        const v2 = skipArray[i];
        if (v2 === v1) {
          v1++;
          v1 > 122 ? (v1 -= 26) : v1;
          i = -1;
        }
      }
      num--;
    }
    result.push(v1);
  });
  result.map((v, idx) => (result[idx] = String.fromCharCode(v)));
  return result.join("");
}

solution(S, SKIP, INDEX);
