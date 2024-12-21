/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

class ListNode {
  constructor(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function (head, k) {
  const sorted = [];
  let current = [];
  let count = 0;
  while (head) {
    count++;
    const cVal = head.val;
    current.push(cVal);

    if (count === k) {
      const reverse = [];
      for (j = current.length - 1; j >= 0; j--) {
        reverse.push(current[j]);
      }
      sorted.push(...reverse);
      current = [];
      count = 0;
    }

    head = head.next;
  }

  if (current.length) {
    sorted.push(...current);
  }

  const result = new ListNode();
  let temp = result;

  for (let i = 0; i < sorted.length; i++) {
    temp.next = new ListNode(sorted[i]);
    temp = temp.next;
  }

  return result.next;
};
