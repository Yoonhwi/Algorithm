function solution(s) {
  let result = 0;

  const dir = {
    "]": "[",
    "}": "{",
    ")": "(",
  };

  if (s.length % 2 === 1) return 0;
  for (i = 0; i < s.length; i++) {
    let flag = 1;
    const stack = [];
    const newStr = s.slice(i) + s.slice(0, i);
    for (const word of newStr) {
      if (word === "(" || word === "{" || word === "[") {
        stack.push(word);
      } else {
        const openWord = stack.pop();
        if (dir[word] === openWord) continue;
        flag = 0;
      }
    }
    flag && result++;
  }

  return result;
}

console.log(solution("({[]})}{"));
