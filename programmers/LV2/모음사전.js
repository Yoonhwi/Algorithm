function solution(word) {
  const words = ["A", "E", "I", "O", "U"];
  const dict = [];

  for (i = 1; i <= 5; i++) {
    dfs("", i);
  }

  function dfs(str, max) {
    if (str.length === max) {
      dict.push(str);
      return;
    }
    for (let j = 0; j < words.length; j++) {
      dfs(str + words[j], max);
    }
  }

  return dict.sort().indexOf(word) + 1;
}

console.log(solution("AAAAE"));
