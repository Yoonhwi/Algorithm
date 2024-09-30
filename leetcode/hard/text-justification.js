/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
var fullJustify = function (words, maxWidth) {
  const result = [];

  let temp = "";
  let lineWords = [];

  for (let i = 0; i < words.length; i++) {
    if (temp === "") {
      temp += words[i];
    } else {
      temp += ` ${words[i]}`;
    }

    if (temp.length > maxWidth) {
      result.push(justify(lineWords, maxWidth));
      temp = words[i];
      lineWords = [words[i]];
      if (i === words.length - 1) {
        result.push(temp.padEnd(maxWidth, " "));
      }
    } else {
      lineWords.push(words[i]);
      if (i === words.length - 1) {
        result.push(temp.padEnd(maxWidth, " "));
      }
    }
  }

  return result;
};

function justify(words, maxWidth) {
  if (words.length === 1) {
    return words[0].padEnd(maxWidth, " ");
  }

  const totalChars = words.reduce((sum, word) => sum + word.length, 0);
  const totalSpaces = maxWidth - totalChars;
  const spacesBetween = Math.floor(totalSpaces / (words.length - 1));
  const extraSpaces = totalSpaces % (words.length - 1);

  let line = words[0];

  for (let i = 1; i < words.length; i++) {
    const spaces = " ".repeat(spacesBetween + (i <= extraSpaces ? 1 : 0));
    line += spaces + words[i];
  }

  return line;
}

const testWords = [
  "This",
  "is",
  "an",
  "example",
  "of",
  "text",
  "justification.",
];
const testWidth = 16;

const testWords2 = ["What", "must", "be", "acknowledgment", "shall", "be"];
const testWidth2 = 16;

const testWords3 = [
  "Science",
  "is",
  "what",
  "we",
  "understand",
  "well",
  "enough",
  "to",
  "explain",
  "to",
  "a",
  "computer.",
  "Art",
  "is",
  "everything",
  "else",
  "we",
  "do",
];
const testWidth3 = 20;

console.log(fullJustify(testWords3, testWidth3));
