function solution(people, limit) {
  let count = 0;
  const arr = people.sort((a, b) => a - b);
  while (arr.length) {
    if (arr[0] + arr[arr.length - 1] <= limit) {
      arr.shift();
      arr.pop();
    } else {
      arr.pop();
    }
    count++;
  }
  return count;
}

function solution(people, limit) {
  people.sort((a, b) => a - b);

  let left = 0;
  let right = people.length - 1;
  let count = 0;

  while (left <= right) {
    if (people[left] + people[right] <= limit) {
      left++;
    }
    right--;
    count++;
  }

  return count;
}

console.log(solution2([70, 80, 50, 50], 100));
