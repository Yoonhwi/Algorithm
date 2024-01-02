const n = 5;
const words = [
  "tank",
  "kick",
  "know",
  "wheel",
  "land",
  "dream",
  "mother",
  "robot",
  "tank",
];
function solution(n, words) {
  const exists = {};

  let order = 1;

  for (let i = 0; i < words.length; i++) {
    const prevWord = words[i - 1];
    const currWord = words[i];

    // 이전단어의 끝 글자와 다음 단어의 첫글자가 다름.
    if (i !== 0 && !isChain(prevWord, currWord)) break;

    // 중복
    if (exists[currWord]) break;

    exists[currWord] = true;
    order++;
  }

  return words.length + 1 === order
    ? [0, 0]
    : [((order - 1) % n) + 1, Math.ceil(order / n)];
}

const isChain = (w1, w2) => {
  return w1[w1.length - 1] === w2[0];
};

solution(n, words);
