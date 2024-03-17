const x = ["joy", "brad", "alessandro", "conan", "david"];
const y = [
  "alessandro brad",
  "alessandro joy",
  "alessandro conan",
  "david alessandro",
  "alessandro david",
];

function solution(friends, gifts) {
  let solution = 0;
  const dict = {};
  const score = {};

  // 친구들의 선물을 받은 횟수를 저장할 객체 생성
  friends.forEach((person1) => {
    dict[person1] = {};
    friends.forEach((person2) => {
      if (person1 !== person2) {
        dict[person1][person2] = 0;
      }
    });
  });

  //선물지수 객체 생성
  gifts.forEach((value) => {
    const [a, b] = value.split(" ");
    giftScore(score, a, b);
    if (dict[a][b]) dict[a][b]++;
    else dict[a][b] = 1;
    if (dict[b][a]) dict[b][a]--;
    else dict[b][a] = -1;
  });

  //주고받은 선물을 비교하여 받아야할 선물을 찾아내는 로직
  const keys = Object.keys(dict);
  keys.forEach((value) => {
    let max = 0;
    const key2 = Object.keys(dict[value]);
    key2.forEach((value2) => {
      if (dict[value][value2] > 0) {
        max++;
      } else if (dict[value][value2] === 0) {
        score[value] > score[value2] ? max++ : max;
      }
    });
    anwer = Math.max(solution, max);
  });

  return solution;
}

function giftScore(object, a, b) {
  if (object[a]) object[a]++;
  else object[a] = 1;
  if (object[b]) object[b]--;
  else object[b] = -1;
}

solution(x, y);

//17번 20번이 실패중 ㅠㅠ
