/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  let root = createNode("");
  let result = "";
  for (const str of strs) {
    if (str === "") return "";
    insertinString(str, root);
  }

  while (root.children.length === 1) {
    root = root.children[0];
    result += root.value;
    if (root.isEnd) return result;
  }

  return result;
};

function createNode(value) {
  return { value, children: [], isEnd: false };
}

function findChild(value, list) {
  return list.children.find((v) => v.value === value) || null;
}

function insertinString(str, root) {
  let currentNode = root;
  for (const word of str) {
    let child = findChild(word, currentNode);

    if (!child) {
      child = createNode(word);
      currentNode.children.push(child);
    }
    currentNode = child;
  }
  currentNode.isEnd = true;
}

const testCase = ["ab", "a"];
console.log(longestCommonPrefix(testCase));
