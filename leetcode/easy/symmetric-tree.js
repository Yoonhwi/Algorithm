/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function (root) {
  const left = root.left;
  const right = root.right;

  return isMirror(left, right);
};

function isMirror(left, right) {
  if (left === null && right === null) return true;
  if (left === null || right === null || left.val !== right.val) return false;

  if (!isMirror(left.left, right.right)) {
    return false;
  }
  if (!isMirror(left.right, right.left)) {
    return false;
  }

  return true;
}
