function solution(cacheSize, cities) {
  let count = 0;
  const arr = [];
  for (i = 0; i < cities.length; i++) {
    const lowerWord = cities[i].toLowerCase();
    const index = arr.indexOf(lowerWord);
    if (index >= 0) {
      count++;
      arr.splice(index, 1);
    } else {
      count += 5;
    }
    arr.push(lowerWord);
    if (arr.length > cacheSize) {
      arr.shift();
    }
  }
  return count;
}

console.log(solution(2, ["Jeju", "Pangyo", "NewYork", "newyork"]));
