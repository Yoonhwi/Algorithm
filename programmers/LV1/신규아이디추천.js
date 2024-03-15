const id = "...!@BaT#*..y.abcdefghijklm";
function solution(new_id) {
  var answer = "";

  answer = new_id.toLowerCase();
  answer = answer.replace(/[^\w-_.]/g, "");
  answer = answer.replace(/\.{2,}/g, ".");
  answer = answer.replace(/^\./, "");
  answer = answer.replace(/\.$/, "");
  if (answer === "") answer = "a";
  if (answer.length >= 16) {
    answer = answer.substr(0, 15);
    answer = answer.replace(/\.$/, "");
  }
  if (answer.length <= 2) {
    answer = answer.padEnd(3, answer[answer.length - 1]);
  }
  return answer;
}

//정규식붙이기 + 조건문을 사용하여 풀었는데, 다른 사람의 풀이를 보니 정규식만으로도 충분히 풀 수 있었다.
//return에 삼항연산자를 사용하여 조건문을 줄였음.

function otherPersonSolution(new_id) {
  const answer = new_id
    .toLowerCase() // 1
    .replace(/[^\w-_.]/g, "") // 2
    .replace(/\.+/g, ".") // 3
    .replace(/^\.|\.$/g, "") // 4
    .replace(/^$/, "a") // 5
    .slice(0, 15)
    .replace(/\.$/, ""); // 6
  const len = answer.length;
  //7
  return len > 2 ? answer : answer + answer.charAt(len - 1).repeat(3 - len);
}

solution(id);
