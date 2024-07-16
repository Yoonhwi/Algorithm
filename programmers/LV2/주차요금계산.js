function solution(fees, records) {
  const map = new Map();
  const minuteMap = new Map();

  records.forEach((v) => {
    const [time, car, action] = v.split(" ");
    if (action === "IN") map.set(car, time);
    if (action === "OUT") {
      const minute = calculateMinute(map.get(car), time);
      map.delete(car);
      if (!minuteMap.has(car)) {
        minuteMap.set(car, minute);
      } else {
        const prevMinute = minuteMap.get(car);
        minuteMap.set(car, prevMinute + minute);
      }
    }
  });

  map.forEach((time, car) => {
    const minute = calculateMinute(time, "23:59");
    if (!minuteMap.has(car)) {
      minuteMap.set(car, minute);
    } else {
      const prevMinute = minuteMap.get(car);
      minuteMap.set(car, prevMinute + minute);
    }
  });

  const [defaultMinute, defaultCost, cutTime, cutCost] = fees;
  const setArr = Array.from(minuteMap).sort();

  setArr.forEach(([_, value], i, arr) => {
    if (value < defaultMinute) {
      arr[i] = defaultCost;
    } else {
      arr[i] =
        Math.ceil((value - defaultMinute) / cutTime) * cutCost + defaultCost;
    }
  });

  return setArr;
}

/**
 *
 * @param {string} inTime
 * @param {string} outTime
 * @returns {number}
 */
function calculateMinute(inTime, outTime) {
  const [inHour, inMinute] = inTime.split(":").map(Number);
  const [outHour, outMinute] = outTime.split(":").map(Number);
  const result = outHour * 60 + outMinute - (inHour * 60 + inMinute);
  return result;
}

console.log(
  solution(
    [180, 5000, 10, 600],
    [
      "05:34 5961 IN",
      "06:00 0000 IN",
      "06:34 0000 OUT",
      "07:59 5961 OUT",
      "07:59 0148 IN",
      "18:59 0000 IN",
      "19:09 0148 OUT",
      "22:59 5961 IN",
      "23:00 5961 OUT",
    ]
  )
);
