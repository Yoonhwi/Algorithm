class Node {
  constructor(val, neighbors) {
    this.val = val === undefined ? 0 : val;
    this.neighbors = neighbors === undefined ? [] : neighbors;
  }
}

/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function (node) {
  const map = {};

  function operate(node) {
    if (!node) return node;
    if (!map[node.val]) {
      map[node.val] = new Node(node.val);
      map[node.val].neighbors = node.neighbors.map((v) => operate(v));
    }
    return map[node.val];
  }

  return operate(node);
};
