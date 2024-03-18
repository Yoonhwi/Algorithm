const survey = ["TR", "RT", "TR"];
const choices = [7, 1, 3];

function solution(survey, choices) {
  var answer = "";
  const dict = {
    R: 0,
    C: 0,
    J: 0,
    A: 0,
  };
  const keys = Object.keys(dict);
  survey.forEach((value, index) => {
    const [a, b] = value.split("");
    if (keys.includes(a)) {
      dict[a] += 4 - choices[index];
    }
    if (keys.includes(b)) {
      dict[b] += choices[index] - 4;
    }
  });

  dict["R"] < 0 ? (answer += "T") : (answer += "R");
  dict["C"] < 0 ? (answer += "F") : (answer += "C");
  dict["J"] < 0 ? (answer += "M") : (answer += "J");
  dict["A"] < 0 ? (answer += "N") : (answer += "A");

  return answer;
}

console.log(solution(survey, choices));
