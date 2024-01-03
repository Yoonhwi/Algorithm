const msg = "KAKAO";
const msg2 = "TOBEORNOTTOBEORTOBEORNOT";

let count = 26;
let x = 0;
const result = [];
function solution(msg) {
  const obj = {};
  createObject(obj);

  const msgArray = msg.split("");
  console.log(msgArray);
  //msgArray 에서 첫번째 원소가 obj에 존재한다면 다음글자까지 체크
  //있다면 또 다음글자까지 체크 없다면 다음글자를 빼고 해당 값을 push해주고 , 다음글자를 포함한 값을 다음 index로 넣어줌.
  for (i = 0; i < msgArray.length; i++) {
    operate(msgArray[i], i, msgArray, obj);
    i += x;
    x = 0;
  }
  return result;
}
function operate(str, index, arr, obj) {
  let plusStr = str + arr[index + 1 + x];
  if (plusStr in obj) {
    x += 1;
    operate(plusStr, index++, arr, obj);
  } else {
    result.push(obj[str]);
    count++;
    obj[plusStr] = count;
  }
}

function createObject(obj) {
  let num = 65;
  for (i = num; i <= 90; i++) {
    obj[String.fromCharCode(i)] = i - 64;
  }
}

solution(msg2);
