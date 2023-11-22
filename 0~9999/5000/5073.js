{
  const readline = require("readline");
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  let input = [];

  const inputCb = (line) => {
    input.push(line.split(" ").map(Number));
  };

  const closeCb = () => {
    input.pop();
    input.map((e) => operate(e));
  };

  const operate = (arr) => {
    const maxX = Math.max.apply(null, arr);
    const arr2 = Array.from(new Set(arr));

    for (i = 0; i < arr.length; i++) {
      if (arr[i] === maxX) {
        arr.splice(i, 1);
        break;
      }
    }

    if (maxX >= arr[0] + arr[1]) {
      console.log("Invalid");
      return;
    } else {
      if (arr2.length === 1) {
        console.log("Equilateral");
        return;
      } else if (arr2.length === 2) {
        console.log("Isosceles");
        return;
      } else console.log("Scalene");
    }
  };
  rl.on("line", inputCb).on("close", closeCb);
}
