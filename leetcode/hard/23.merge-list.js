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
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
  const arr = [];

  while (lists.length) {
    let list = lists.shift();
    while (list) {
      arr.push(list.val);
      list = list.next;
    }
  }

  arr.sort((a, b) => a - b);
  const result = new ListNode();
  let prev = result;

  for (let i = 0; i < arr.length; i++) {
    const current = new ListNode(arr[i]);
    prev.next = current;
    prev = current;
  }

  return result.next;
};
