/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  const result = [];
  addString("", 0, 0, n, result);

  return result;
};

function addString(str, closeCount, openCount, n, result) {
  if (str.length === n * 2) {
    result.push(str);
    return;
  }

  if (openCount < n) {
    addString(str + "(", closeCount, openCount + 1, n, result);
  }

  if (closeCount < openCount) {
    addString(str + ")", closeCount + 1, openCount, n, result);
  }
}

// function addString(str,closeCount,openCount,n,result){
//     if(closeCount<n){
//         if(openCount<n){
//             addString(str+"(",closeCount,openCount+1,n,result);
//             if(closeCount<openCount){
//                 addString(str+")",closeCount+1,openCount,n,result);
//             }
//         }else{
//             addString(str+")",closeCount+1,openCount,n,result);
//         }
//     }else{
//         result.push(str);
//     }
// }
//
// if문 중첩으로 인해 가독성이 너무 떨어지는것 같습니다.
// early return과 구조 수정으로 재귀함수를 좀 깔끔하게 작성해야 할 것 같습니다.

console.log(generateParenthesis(3)); // output : ["((()))","(()())","(())()","()(())","()()()"]
