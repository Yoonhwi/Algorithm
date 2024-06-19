{
  const readline = require("readline");
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  let input = 0;
  const inputCb = (line) => {
    input = Number(line);
  };

  const closeCb = () => {
    let num = 1;

    let count = 0; //6씩올라감
    let result = 2; // 결과 방 수

    if (input === 1) {
      console.log(1);
      return;
    } else {
      while (true) {
        count += 6;
        if (num < input && input <= num + count) {
          console.log(result);
          return;
        } else {
          num += count;
          result++;
        }
      }
    }
  };

  rl.on("line", inputCb).on("close", closeCb);
}
