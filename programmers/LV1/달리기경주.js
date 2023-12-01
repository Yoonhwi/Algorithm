//달리기 경주
const players = ["mumu", "soe", "poe", "kai", "mine"];
const callings = ["kai", "kai", "mine", "mine", "poe"];

function solution(players, callings) {
  const object = {};
  for (i = 0; i < players.length; i++) {
    object[players[i]] = i;
  }
  callings.forEach((v) => {
    const index = object[v];
    const temp = players[index];
    players[index] = players[index - 1];
    players[index - 1] = temp;

    object[v] = index - 1;
    object[players[index]] = index;
  });
  return players;
}

solution(players, callings);
