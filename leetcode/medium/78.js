/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
    if (nums.length === 1) {
        return [[], nums]
    }

    const answer = [[]];

    for (let i = 0; i < nums.length; i++) {
        const length = answer.length;
        for (let j = 0; j < length; j++) {
            answer.push([...answer[j], nums[i]])
        }
    }

    return answer
};

console.log(subsets([1, 2, 3]));
console.log(subsets([0]));