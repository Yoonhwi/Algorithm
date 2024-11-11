/**
 *
 * @param {number} bridge_length
 * @param {number} weight
 * @param {number[]} truck_weights
 */
function solution(bridge_length, weight, truck_weights) {
  const stack = [];
  let i = 1;
  while (true) {
    let sum = stack.reduce((sum, curr) => {
      return sum + curr;
    }, 0);

    // 1번쨰
    while (sum + truck_weights[0] <= weight) {
      stack.push(truck_weights.shift());
      sum += stack.at(-1);
    }

    //2번쨰
    for (let j = 0; j < stack.length; j++) {
      stack[j]--;
      if (stack[j] === 0) {
        stack.splice(j, 1);
        j--;
      }
    }
    console.log(stack, truck_weights);
    i++;
    if (!truck_weights.length && !stack.length) {
      return i;
    }
  }
}

const A_bridge_length = 2;
const A_weight = 10;
const A_truck_weights = [7, 4, 5, 6];
// output : 8

console.log(solution(A_bridge_length, A_weight, A_truck_weights));
