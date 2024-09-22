/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
  const all = [];
  const dict = {};

  if (s === p) return true;
  if (p.indexOf("*") > 0) {
    for (i = 0; i < p.length; i++) {
      if (p[i] === "*") continue;
      if (p[i + 1] === "*") {
        all.push(p[i]);
      } else {
        dict[p[i]] ? dict[p[i]]++ : (dict[p[i]] = 1);
      }
    }

    if (all.includes(".")) return true;

    all.forEach((v) => {
      s = s.replace(new RegExp(v, "g"), "");
    });

    for (const [key, value] of Object.entries(dict)) {
      for (let i = 0; i < value; i++) {
        s = s.replace(key, "");
      }
    }

    if (s === "") return true;
  }

  return false;
};

console.log(isMatch("mississippi", "mis*is*p*.")); //이건 false가 나와야하고,
console.log(isMatch("mississippi", "mis*is*ip*.")); //이건 true 나와야하고,
//DP사용문제라 일단 스킵
