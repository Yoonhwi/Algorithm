{
  const readline = require("readline");
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  let input = [];
  let sum = 0;
  let credit = 0;
  let creditSum = 0;
  const GRADE = {
    "A+": 4.5,
    A0: 4.0,
    "B+": 3.5,
    B0: 3.0,
    "C+": 2.5,
    C0: 2.0,
    "D+": 1.5,
    D0: 1.0,
    F: 0.0,
  };
  const inputCb = (line) => {
    input.push(line.split(" "));
  };

  const closeCb = () => {
    for (i = 0; i < input.length; i++) {
      if (input[i][2] != "P") {
        credit = Number(input[i][1]);
        sum += GRADE[input[i][2]] * credit;
        creditSum += credit;
      }
    }
    console.log(sum / creditSum);
  };

  rl.on("line", inputCb).on("close", closeCb);
}
