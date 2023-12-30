const today = "2020.01.01";
const today2 = "2022.05.19";
const terms = ["Z 3", "D 5"];
const terms2 = ["A 6", "B 12", "C 3"];
const privacies = [
  "2019.01.01 D",
  "2019.11.15 Z",
  "2019.08.02 D",
  "2019.07.01 D",
  "2018.12.28 Z",
];
const privacies2 = [
  "2021.05.02 A",
  "2021.07.01 B",
  "2022.02.19 C",
  "2022.02.20 C",
];
function solution(today, terms, privacies) {
  var answer = [];
  const termsObject = {};
  const [todayY, todayM, todayD] = today.split(".").map(Number);
  const operToday = operate(todayY, todayM, todayD);

  terms.forEach((v) => {
    const [alpha, month] = v.split(" ");
    termsObject[alpha] = Number(month);
  });

  privacies.forEach((v, i) => {
    const [privacyDay, privacyAlpha] = v.split(" ");
    const [todayY, todayM, todayD] = privacyDay.split(".").map(Number);
    const operprivacyDay =
      operate(todayY, todayM, todayD) + termsObject[privacyAlpha] * 28;
    operToday >= operprivacyDay ? answer.push(i + 1) : "";
  });
  console.log(answer);
  return answer;
}

function operate(year, month, day) {
  return year * 12 * 28 + month * 28 + day;
}

solution(today, terms, privacies);
