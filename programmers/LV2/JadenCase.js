const s = "3people    unFollowed me";

function solution(s) {
  const words = s.toLowerCase().split(" ");
  for (i = 0; i < words.length; i++) {
    if (words[i] === "") continue;
    const flattendFisrt = words[i][0].toUpperCase();
    words[i] = flattendFisrt + words[i].substring(1);
  }
  return words.join(" ");
}

solution(s);
