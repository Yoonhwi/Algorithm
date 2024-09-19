/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  let zigzagIdx = 0;
  let direction = true;
  if (numRows === 1) return s;
  const arr = new Array(numRows).fill().map(() => []);

  for (i = 0; i < s.length; i++) {
    arr[zigzagIdx].push(s[i]);
    if (zigzagIdx === numRows - 1) {
      direction = false;
    }
    if (zigzagIdx === 0) {
      direction = true;
    }
    direction ? ++zigzagIdx : --zigzagIdx;
  }
  return arr.map((v) => v.join("")).join("");
};

console.log(convert("AB", 1));
