function getPrimeNum(num) {
  if (num < 2) return false;
  for (i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}
function solution(n, k) {
  let result = 0;
  const num = n.toString(k);
  let str = "";
  for (const a in num) {
    if (num[a] == 0 && str.length) {
      getPrimeNum(Number(str)) && result++;
      str = "";
      continue;
    }
    if (num[a] != 0) {
      str += num[a];
    }
    if (a == num.length - 1 && str.length) {
      getPrimeNum(Number(str)) && result++;
    }
  }
  return result;
}

function solution2(n, k) {
  let result = 0;
  const arr = n.toString(k).split("0");
  arr.forEach((v) => {
    getPrimeNum(+v) && result++;
  });
  return result;
}

console.log(solution2(437674, 3));
