/**
 * @param {number[]} nums
 * @return {boolean}
 */
var primeSubOperation = function (nums) {
    const primeNums = primeNumbers();
    const copy = [...nums];

    for(let i=0;i<nums.length;i++){
        for(let j=0;j<primeNums.length;j++){
            if(copy[i] < primeNums[j] || (i>=1 && nums[i-1] >= copy[i]-primeNums[j]) || copy[i]-primeNums[j]<=0){
                break;
            }
            nums[i] = copy[i] - primeNums[j]
        }
    }

    return isIncrease(nums);
};

function primeNumbers() {
    const primeNums = [];
    for (i = 2; i <= 1000; i++) {
        //nums[i] 가 1 부터 1000 까지이므로
        let isPrime = true;
        for (let j = 2; j <= Math.sqrt(i); j++) {
            if (i % j === 0) {
                isPrime = false;
            }
        }
    
        if(isPrime){
            primeNums.push(i)
        }
    }

    return primeNums;
}

function isIncrease(arr){
    for(let i=1;i<arr.length;i++){
        if(arr[i]<=arr[i-1]){
            return false
        }
    }
    return true
}

console.log(primeSubOperation([4, 9, 6, 10])); // true
console.log(primeSubOperation([6, 8, 11, 12])); //true
console.log(primeSubOperation([5, 8, 3])); // false
