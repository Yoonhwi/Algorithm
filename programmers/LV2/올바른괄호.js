const s = "()()";
const s2 = "(())()";
const s3 = ")()(";
const s4 = "(()(";
function solution(s) {
  let count = 0;
  const words = s.split("");
  if (words[0] !== "(" || words[words.length - 1] !== ")") return false;

  for (i = 0; i < words.length; i++) {
    if (words[i] === "(") {
      count++;
    } else {
      count--;
    }
    if (count < 0) return false;
  }
  if (count !== 0) return false;
  return true;
}

solution(s4);
