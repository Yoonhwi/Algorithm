//힙을 사용해 풀어야하는데
//힙에대해 좀 공부를 한 후 다시 풀어봐야할듯

function solution(scoville, K) {
  let isK = false;
  let result = 0;
  const arr = [];

  scoville.forEach((v) => {
    if (v < K) arr.push(v);
    else {
      isK = true;
    }
  });

  while (arr.length) {
    const curr = arr.shift();
    const next = arr[0];
    if (!next && !isK) {
      return -1;
    }
    const min = Math.min(curr, next);
    const max = Math.max(curr, next);
    const scoville = min + max * 2;

    if (scoville >= K) {
      arr.shift();
    } else {
      arr[0] = scoville;
    }
    result++;
  }
  return result;
}

console.log(solution([1, 2, 3, 9, 10, 12], 7));
