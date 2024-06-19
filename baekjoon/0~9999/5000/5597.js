{
  const inputCb = (line) => {
    input.push(Number(line));
  };

  const closeCb = () => {
    for (i = 1; i < 31; i++) {
      student.push(i);
    }
    const absence = student.filter((num) => !input.includes(num));
    for (i = 0; i < absence.length; i++) {
      console.log(absence[i]);
    }
  };

  const input = [];
  const student = [];

  const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  readline.on("line", inputCb).on("close", closeCb);
}
