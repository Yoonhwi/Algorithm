/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const dict = {};
  const result = [];

  for (let i = 0; i < strs.length; i++) {
    const str = strs[i].split("").sort().join("");

    if (dict[str]) {
      dict[str].push(strs[i]);
    } else {
      dict[str] = [strs[i]];
    }
  }

  for (const [key, value] of Object.entries(dict)) {
    result.push(value.sort());
  }

  return result;
};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
