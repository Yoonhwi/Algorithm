const s = "1 2 3 4";
function solution(s) {
  const numberArray = s.split(" ").map(Number);
  let Max = numberArray[0],
    Min = numberArray[0];
  numberArray.forEach((v) => {
    if (v > Max) Max = v;
    else if (v < Min) Min = v;
  });
  let answer = `${Min} ${Max}`;
  return answer;
}

solution(s);
