function solution(s) {
  let result = [];
  s = s
    .replace(/{/g, "")
    .split("}")
    .sort((a, b) => a.length - b.length)
    .filter((v) => v !== "");

  s = s.map((v) => {
    v[0] === "," && (v = v.replace(",", ""));
    return v.split(",");
  });

  for (i = 0; i < s.length; i++) {
    s[i].forEach((v) => {
      !result.includes(v) && result.push(v);
    });
  }
  return result.map(Number);
}

console.log(solution("{{123}}"));
