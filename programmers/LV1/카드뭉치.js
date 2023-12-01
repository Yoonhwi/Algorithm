const CARDS1 = ["i", "drink", "water"];
const CARDS2 = ["want", "to"];
const GOAL = ["i", "want", "to", "drink", "water"];

function solution(cards1, cards2, goal) {
  while (goal.length) {
    if (!operate(cards1, cards2, goal)) {
      return "No";
    }
  }
  return "Yes";
}

function operate(arr1, arr2, goal) {
  if (goal[0] === arr1[0]) {
    goal.shift();
    arr1.shift();
    return true;
  }
  if (goal[0] === arr2[0]) {
    goal.shift();
    arr2.shift();
    return true;
  }
  return false;
}

solution(CARDS1, CARDS2, GOAL);
