/**
 * @param {string} text
 * @return {number}
 */
var maxRepOpt1 = function (text) {
  let max = -Infinity;
  const dict = new Set();
  const map = new Map();

  for (const word of text) {
    map.set(word, (map.get(word) ?? 0) + 1);
  }
  silde(0);
  return max;

  function silde(idx) {
    if (idx >= text.length) return;
    const current = text[idx];
    const currentNums = map.get(current);
    dict.add(current);
    let count = 1;
    for (let i = idx + 1; i < text.length; i++) {
      if (text[i] === current) {
        count++;
        if (i === text.length - 1 && currentNums > count) {
          count++;
        }
      } else {
        count += findBack(current, i + 1);
        break;
      }
    }
    if (count > currentNums) {
      count = currentNums;
    }

    max = Math.max(max, count);
    silde(idx + 1);
  }

  function findBack(curr, idx) {
    let isExistCurr = false;
    let isDifferent = false;
    let length = 0;

    let currCount = 0;
    for (let i = idx; i < text.length; i++) {
      if (text[i] === curr) {
        isExistCurr = true;
        currCount++;
      } else {
        isDifferent = true;
      }

      if (text[i] === curr && !isDifferent) {
        length++;
        continue;
      }
    }

    if (!length && isExistCurr) {
      return 1;
    }

    if (currCount > length) {
      return length + 1;
    } else {
      return dict.has(curr) ? length + 1 : length;
    }
  }
};

console.log(maxRepOpt1("acbaaa"));
