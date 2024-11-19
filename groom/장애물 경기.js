const readline = require("readline");
let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input = [];

rl.on("line", (line) => {
  input.push(line);
});

rl.on("close", () => {
  // const input = ["3", "40 70", "20 30 50", "20 30 50", "35 40 60", "50 20 40"];
  // const input = ["4", "43 70", "30 10 38", "20 30 50", "45 35 55", "55 50 70"];
  if (input.length < 3) return;
  input.shift();

  let [currentY, targetX] = input.shift().split(" ").map(Number);
  const arr = input
    .map((v) => {
      return v.split(" ").map(Number);
    })
    .sort((a, b) => a[0] - b[0]);

  const queue = [[0, currentY, 0]];
  const dictMap = new Map();

  let minLength = Infinity;
  let result = new Set();

  while (queue.length) {
    const [idx, currentY, length] = queue.shift();
    // console.log(idx, currentY, length);

    if (idx === arr.length) {
      if (length < minLength) {
        result.clear();
        result.add(currentY);
        minLength = length;
      } else if (length === minLength) {
        result.add(currentY);
      } else {
        continue;
      }
    }

    if (idx >= arr.length) {
      continue;
    }

    const key = `${idx}-${currentY}`;

    if (dictMap.has(key) && dictMap.get(key) <= length) {
      continue;
    }

    dictMap.set(key, length);

    const [_, yl, yh] = arr[idx];

    if (yl < currentY && currentY < yh) {
      queue.push([idx + 1, yl, length + currentY - yl]);
      queue.push([idx + 1, yh, length + yh - currentY]);
    } else {
      queue.push([idx + 1, currentY, length]);
    }
  }

  const arrivedY = [...result].sort((a, b) => a - b);

  console.log(
    `${minLength + targetX}\n${arrivedY.length} ${arrivedY.join(" ")}`
  );
});

// queue + map메모이제이션 방식은 2문제더 맞았지만 다수의 테스트케이스 runtime 에러
/*
  const dict = new Map();

  const queue = [{ idx: 0, currY: currentY, length: targetX }];

  while (queue.length) {
    const { idx, currY, length } = queue.shift();
    const key = `${idx}-${currY}`;
    if (dict.has(key) && dict.get(key) <= length) {
      continue;
    }

    dict.set(currY, length);

    if (idx === arr.length) {
      if (!result[length]) {
        result[length] = [];
      }
      result[length].push(currY);
      continue;
    }

    if (arr[idx][1] < currY && currY < arr[idx][2]) {
      queue.push({
        idx: idx + 1,
        currY: arr[idx][2],
        length: length + arr[idx][2] - currY,
      });
      queue.push({
        idx: idx + 1,
        currY: arr[idx][1],
        length: length + currY - arr[idx][1],
      });
    } else {
      queue.push({
        idx: idx + 1,
        currY,
        length,
      });
    }
  }

  const resultArr = Object.entries(result).sort((a, b) => a[0] - b[0]);
  const shortest = resultArr[0][0];
  const uniqueY = [...new Set(resultArr[0][1])].sort((a, b) => a - b);

  console.log(`${shortest}\n${uniqueY.length} ${uniqueY.join(" ")}`);
 */

//   재귀는 다수 케이스에서 runtime error 발생.
//   move(arr, 0, currentY, targetX);

//   const resultArr = Object.entries(result);
//   resultArr.sort((a, b) => a[0] - b[0]);

//   const shortest = resultArr[0][0];

//   const set = new Set(resultArr[0][1]);
//   const endY = [...set].sort((a, b) => a - b);
//   console.log(`${shortest}\n${endY.length} ${endY.join(" ")}`);

//   function move(arr, idx, currY, length) {
//     if (idx === arr.length) {
//       if (!result[length]) {
//         result[length] = [];
//       }
//       result[length].push(currY);
//       return;
//     }

//     if (arr[idx][1] < currY && currY < arr[idx][2]) {
//       move(arr, idx + 1, arr[idx][2], length + arr[idx][2] - currY);
//       move(arr, idx + 1, arr[idx][1], length + currY - arr[idx][1]);
//     } else {
//       move(arr, idx + 1, currY, length);
//     }
//   }
