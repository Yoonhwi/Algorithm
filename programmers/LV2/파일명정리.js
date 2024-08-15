/*
입력: ["img12.png", "img10.png", "img02.png", "img1.png", "IMG01.GIF", "img2.JPG"]
출력: ["img1.png", "IMG01.GIF", "img02.png", "img2.JPG", "img10.png", "img12.png"]

입력: ["F-5 Freedom Fighter", "B-50 Superfortress", "A-10 Thunderbolt II", "F-14 Tomcat"]
출력: ["A-10 Thunderbolt II", "B-50 Superfortress", "F-5 Freedom Fighter", "F-14 Tomcat"]
 */

/**
 * 1. 파일명을 숫자를 기준으로 자릅니다.
 * 2. 앞부분은 HEAD , 숫자는 NUMBER , 나머지는 TAIL 로 구분합니다.
 * 3. HEAD의 대소문자는 구분하지않고, 숫자가 같을때에는 입력 순서를 유지합니다.
 */

/**
 *
 * @param {string[]} files
 * @returns {string[]}
 */
function solution(files) {
  const dict = [];
  const answer = [];
  files.forEach((file) => {
    let head = "";
    let number = "";
    for (const word of file) {
      if (!isNaN(parseInt(word))) {
        number += word;
      } else {
        if (number) {
          break;
        } else head += word;
      }
    }

    dict.push([head.toLowerCase(), Number(number), file]);
  });

  dict.sort((a, b) => {
    if (a[0] != b[0]) return a[0] > b[0] ? 1 : -1;
    else {
      if (a[1] != b[1]) return a[1] > b[1] ? 1 : -1;
      else return files.indexOf(a[2]) > files.indexOf(b[2]) ? 1 : -1;
    }
  });

  dict.forEach((v) => answer.push(v[2]));

  return answer;
}

const testCaseA = [
  "img12.png",
  "img10.png",
  "img02.png",
  "img1.png",
  "IMG01.GIF",
  "img2.JPG",
];
const textCaseB = [
  "F-5 Freedom Fighter",
  "B-50 Superfortress",
  "A-10 Thunderbolt II",
  "F-14 Tomcat",
];

console.log(solution(testCaseA)); // ["img1.png", "IMG01.GIF", "img02.png", "img2.JPG", "img10.png", "img12.png"]
console.log(solution(textCaseB)); // ["A-10 Thunderbolt II", "B-50 Superfortress", "F-5 Freedom Fighter", "F-14 Tomcat"]
