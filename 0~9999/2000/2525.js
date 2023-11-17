{
  const readline = require("readline");
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  let input = [];

  const inputCb = (line) => {
    input.push(line);
  };

  const closeCb = () => {
    const check = input[0].split(" ");
    operate(Number(check[0]), Number(check[1]), Number(input[1]));
  };

  rl.on("line", inputCb).on("close", closeCb);

  function operate(hour, minute, time) {
    while (true) {
      if (minute + time >= 60) {
        hour++;
        minute = minute + time - 60;
        time = 0;
        if (hour === 24) {
          hour = 0;
        }
      } else {
        minute += time;
        console.log(hour, minute);
        break;
      }
      if (minute < 60) {
        console.log(hour, minute);
        break;
      }
    }
  }
}
