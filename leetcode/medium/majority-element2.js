/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function (nums) {
  const dict = {};
  const result = [];
  nums.forEach((v) => {
    if (!dict[v]) {
      dict[v] = 1;
    } else {
      dict[v]++;
    }
  });

  for (const [key, value] of Object.entries(dict)) {
    value > nums.length / 3 && result.push(Number(key));
  }

  return result;
};

console.log(majorityElement([1]));
