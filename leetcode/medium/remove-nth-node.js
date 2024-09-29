/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 *
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */

class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

var removeNthFromEnd = function (head, n) {
  let node = new ListNode(0, head);
  let first = node;
  let second = node;

  for (let i = 0; i <= n; i++) {
    first = first.next;
  }

  while (first) {
    first = first.next;
    second = second.next;
  }
  second.next = second.next.next;

  return node.next;
};

const testHead = [1, 2, 3, 4, 5];
const testN = 2;

function arrayToLinkedList(arr) {
  const head = new ListNode(arr[0]);
  let current = head;

  for (let i = 1; i < arr.length; i++) {
    current.next = new ListNode(arr[i]);
    current = current.next;
  }
  return head;
}

console.log(removeNthFromEnd(arrayToLinkedList(testHead), testN));
