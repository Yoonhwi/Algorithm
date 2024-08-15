/**
 * 입력 ["Enter uid1234 Muzi", "Enter uid4567 Prodo","Leave uid1234","Enter uid1234 Prodo","Change uid4567 Ryan"]
 * 출력 ["Prodo님이 들어왔습니다.", "Ryan님이 들어왔습니다.", "Prodo님이 나갔습니다.", "Prodo님이 들어왔습니다."]
 * @param {string[]} record
 * @returns {string[]}
 */
function solution(record) {
  const result = [];
  const arr = [];
  const dict = {};

  record.forEach((v) => {
    let message = "";
    const str = v.split(" ");
    if (str[2]) dict[str[1]] = str[2];
    if (str[0] === "Enter") message = "님이 들어왔습니다.";
    if (str[0] === "Leave") message = "님이 나갔습니다.";
    if (!message) return;
    arr.push([str[1], message]);
  });

  arr.forEach((v) => {
    result.push(`${dict[v[0]]}${v[1]}`);
  });

  return result;
}

function solution(record) {
  const action = [];
  const userInfo = {};
  const stateMapping = {
    Enter: "님이 들어왔습니다.",
    Leave: "님이 나갔습니다.",
  };

  record.forEach((v) => {
    const [state, id, nick] = v.split(" ");
    if (state !== "Change") action.push([state, id]);
    if (nick) userInfo[id] = nick;
  });

  return action.map(([state, id]) => {
    return `${userInfo[id]}${stateMapping[state]}`;
  });
}

console.log(
  solution([
    "Enter uid1234 Muzi",
    "Enter uid4567 Prodo",
    "Leave uid1234",
    "Enter uid1234 Prodo",
    "Change uid4567 Ryan",
  ])
);
