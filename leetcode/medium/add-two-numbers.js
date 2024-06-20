/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

var addTwoNumbers = function (l1, l2) {
  const result = [];
  let up = 0;
  while (l1 || l2) {
    const numA = l1 ? l1.val : 0;
    const numB = l2 ? l2.val : 0;

    let sum = numA + numB + up;
    sum >= 10 ? ((up = 1), (sum -= 10)) : (up = 0);
    result.push(sum);

    l1 = l1 ? l1.next : null;
    l2 = l2 ? l2.next : null;
  }
  up && result.push(1);

  return link(result);
};

function link(arr) {
  let head = null;
  for (let i = arr.length - 1; i >= 0; i--) {
    head = new ListNode(arr[i], head);
  }
  return head;
}

// 연결리스트의 노드 다루기 문제
// 시간복잡도 : O(n)
// runtime : 120ms
