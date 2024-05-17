function solution(str1, str2) {
  const dir1 = {};
  const dir2 = {};

  let intersection = 0;
  let sum = 0;
  const combined = {};

  flat(str1).forEach((v) => {
    dir1[v] = (dir1[v] ?? 0) + 1;
  });
  flat(str2).forEach((v) => {
    dir2[v] = (dir2[v] ?? 0) + 1;
  });

  //교집합 구함
  for (const [key, value] of Object.entries(dir1)) {
    if (dir2[key]) {
      intersection += Math.min(value, dir2[key]);
    }
  }

  for (const [key, value] of Object.entries(dir1)) {
    combined[key] = dir2[key] ? Math.max(value, dir2[key]) : value;
  }
  for (const [key, value] of Object.entries(dir2)) {
    combined[key] = dir1[key] ? Math.max(value, dir1[key]) : value;
  }

  for (const [key, value] of Object.entries(combined)) {
    sum += value;
  }

  if (!(sum - intersection)) return 65536;
  const result = Math.floor((intersection / sum) * 65536);
  return result ?? 65536;
}
function flat(words) {
  const arr = [];
  const reg = /^[a-zA-Z]{2}$/;
  for (i = 0; i < words.length - 1; i++) {
    const newWord = words.slice(i, i + 2);
    if (reg.test(newWord)) {
      arr.push(newWord.toLowerCase());
    }
  }
  return arr;
}

console.log(solution("FRANCE", "french"));
