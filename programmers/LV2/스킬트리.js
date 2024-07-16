//첫번쨰 코드
function solution(skill, skill_trees) {
  let result = 0;

  for (let i = 0; i < skill_trees.length; i++) {
    const map = new Map();
    const wordArr = [];
    skill.split("").forEach((v, i) => {
      wordArr.push(v);
      if (i === 0) {
        map.set(v, true);
      } else map.set(v, false);
    });
    oper();

    function oper() {
      const word = skill_trees[i].split("");
      for (let j = 0; j < word.length; j++) {
        if (map.has(word[j])) {
          const isSkill = map.get(word[j]);
          if (isSkill) {
            const idx = wordArr.indexOf(word[j]);
            const next = wordArr[idx + 1];
            map.set(next, true);
          } else return;
        } else continue;
      }
      result++;
    }
  }
  return result;
}

function solution(skill, skill_trees) {
  let result = 0;

  for (let i = 0; i < skill_trees.length; i++) {
    const skillOrder = skill.split("");
    const skillTree = skill_trees[i].split("");
    let isValid = true;

    for (let j = 0; j < skillTree.length; j++) {
      const skill = skillTree[j];
      if (skillOrder.includes(skill)) {
        if (skill === skillOrder[0]) {
          skillOrder.shift();
        } else {
          isValid = false;
          break;
        }
      }
    }

    if (isValid) result++;
  }

  return result;
}

console.log(solution("CBD", ["BACDE", "CBADF", "AECB", "BDA"])); // 2
