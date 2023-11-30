const BANDAGE = [1, 1, 1];
const HEALTH = 5;
const ATTACKS = [
  [1, 2],
  [3, 2],
];

function solution(bandage, health, attacks) {
  const time = attacks.at(-1)[0];
  let healthCount = 0;
  //attackts배열의 마지막 배열의 첫밴째 인자의 수 만큼 진행해야함.
  for (i = 1; i <= time; i++) {
    if (attacks[0][0] === i) {
      //어택이 있다면
      health -= attacks[0][1];
      if (health <= 0) {
        return -1;
      }
      attacks.shift();
      healthCount = 0;
    } else {
      health = recovery(health, bandage[1], HEALTH);
      healthCount++;
      if (healthCount === bandage[0]) {
        health = recovery(health, bandage[2], HEALTH);
        healthCount = 0;
      }
    }
  }
  return health;
}

function recovery(health, value, max) {
  //어택이 없다면 실행
  //health = 현재피 , value = 회복량 ,max = 최대피 ,
  health += value;
  if (health > max) return max;
  return health;
}

solution(BANDAGE, HEALTH, ATTACKS);
