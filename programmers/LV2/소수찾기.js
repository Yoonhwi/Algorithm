function solution(numbers) {
  const arr = numbers.split("");
  let result = 0;
  const set = new Set();

  const dfs = (current, setArr) => {
    current.length > 0 && set.add(Number(current));

    for (let i = 0; i < setArr.length; i++) {
      dfs(current + setArr[i], setArr.slice(0, i).concat(setArr.slice(i + 1)));
    }
  };

  dfs("", arr);

  for (const number of set) {
    isPrime(number) && result++;
  }

  return result;
}

function isPrime(num) {
  if (num < 2) return false;

  for (let i = 2; i <= num / 2; i++) {
    if (num % i === 0) return false;
  }

  return true;
}

console.log(solution("17"));
