const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.on("line", inputCb).on("close", closeCb);

////////// =================================================================

const input = [];

const inputCb = (line) => {
  input.push(line);
};

////////// =================================================================

const closeCb = () => {
  const str = input[0];

  console.log(getCroatiaAlphabetCount(str));

  process.exit();
};

const croatiaAlphabet = ["c=", "c-", "dz=", "d-", "lj", "nj", "s=", "z="];

const getCroatiaAlphabetCount = (str) => {
  let count = 0;

  return count;
};
