/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

var swapPairs = function (head) {
  if (!head || !head.next) {
    return head;
  }

  operate(head);

  return head;
};

function operate(currentNode) {
  const next = currentNode.next;
  const tempVal = currentNode.val;

  currentNode.val = next.val;
  next.val = tempVal;

  if (!next.next || !next.next.next) {
    return;
  }

  operate(next.next);
}
