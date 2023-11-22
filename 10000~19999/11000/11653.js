{
  const readline = require("readline");
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  let input = 0;
  let result = [];
  const inputCb = (line) => {
    input = Number(line);
  };

  const closeCb = () => {
    for (let i = 1; i < input; ++i) {
      if (input % i === 0) {
        result.push(i);
        input /= i;
        i = 1;
        if (isPrime(input)) {
          result.push(input);
        }
      }
    }
    result.shift();
    result.map((e) => console.log(e));
  };

  const isPrime = (num) => {
    const sqrt = Math.floor(Math.sqrt(num));
    let arr = [];
    for (i = 1; i <= sqrt; i++) {
      if (num % i === 0) {
        arr.push(i);
        arr.push(num / i);
      }
    }
    if (arr.length === 2) return true;
    else return false;
  };
  rl.on("line", inputCb).on("close", closeCb);
}
