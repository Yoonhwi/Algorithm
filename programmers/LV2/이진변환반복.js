const s = "110010101001";

const result = [0, 0];

function solution(s) {
  result[0]++;
  let word = "";
  s.split("").forEach((num) => {
    if (num === "0") {
      result[1]++;
    } else word = word + "1";
  });
  const next = word.length.toString(2);
  if (next !== "1") return solution(next);
  else return result;
}

solution(s);
