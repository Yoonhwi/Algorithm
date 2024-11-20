// /**
//  * @param {string} s
//  * @param {number} k
//  * @return {number}
//  */

// 119번 testcase failed time limit O(2^s.length)

// var takeCharacters = function (s, k) {
//   let result = Infinity;
//   operate(0, s.length - 1, k, k, k, 0);
//   return result !== Infinity ? result : -1;

//   function operate(left, right, a, b, c, count) {
//     if (!a && !b && !c) {
//       result = Math.min(result, count);
//       return;
//     }

//     if (right < left || left > s.length || right < 0) {
//       return;
//     }

//     if (count >= result) return;

//     if (s[left] === "a") {
//       operate(left + 1, right, a ? a - 1 : a, b, c, count + 1);
//     } else if (s[left] === "b") {
//       operate(left + 1, right, a, b ? b - 1 : b, c, count + 1);
//     } else if (s[left] === "c") {
//       operate(left + 1, right, a, b, c ? c - 1 : c, count + 1);
//     }

//     if (s[right] === "a") {
//       operate(left, right - 1, a ? a - 1 : a, b, c, count + 1);
//     } else if (s[right] === "b") {
//       operate(left, right - 1, a, b ? b - 1 : b, c, count + 1);
//     } else if (s[right] === "c") {
//       operate(left, right - 1, a, b, c ? c - 1 : c, count + 1);
//     }
//   }
// };


var takeCharacters = function (s, k) {
    let ca = 0, cb = 0, cc = 0;
    const n = s.length;
  
    // Step 1: 전체 문자열에서 각 문자의 개수 카운트
    for (const ch of s) {
      if (ch === 'a') ca++;
      else if (ch === 'b') cb++;
      else cc++;
    }
  
    // Step 2: 최소 조건을 만족하지 않으면 -1 반환
    if (ca < k || cb < k || cc < k) return -1;
  
    let ans = n;
    let left = n - 1, right = n - 1;
  
    // Step 3: 슬라이딩 윈도우 탐색
    while (left >= 0) {
      const ch = s[left];
      if (ch === 'a') ca--;
      else if (ch === 'b') cb--;
      else cc--;
  
      // 오른쪽 포인터를 왼쪽으로 이동하면서 조건을 만족하도록 만듦
      while (right >= left && (ca < k || cb < k || cc < k)) {
        const rightChar = s[right];
        if (rightChar === 'a') ca++;
        else if (rightChar === 'b') cb++;
        else cc++;
        right--;
      }
  
      // 최소 길이 갱신
      ans = Math.min(ans, left - 1 + n - right);
      left--;
    }
  
    return ans;
  };
  
console.log(takeCharacters("aabaaaacaabc", 2)); // 8
console.log(takeCharacters("a", 1)); // -1
