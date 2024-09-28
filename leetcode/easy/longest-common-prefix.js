class Trie {
  constructor() {
    this.root = this.createNode("");
  }

  //node를 생성합니다.
  createNode(word) {
    return { value: word, children: [], isEnd: false };
  }

  //현재 node와 문자를 받아와 해당 문자가 존재하는지 탐색합니다.
  findNode(word, node) {
    return node.children.find((v) => v.value === word) || null;
  }

  //문자열을 받아와 한글자씩 node를 탐색합니다.
  insert(str) {
    let current = this.root;
    for (const word of str) {
      let child = this.findNode(word, current); //현재 node에서 해당 문자가 존재하는지 탐색 후 저장
      if (!child) {
        child = this.createNode(word);
        current.children.push(child); //현재 node에서 해당 문자가 없다면, 노드생성 후 저장
      }
      current = child; //다음 node로 넘어감.
    }
    current.isEnd = true; //마지막 노드에서 단어의 끝맺음을 저장.
  }
}

var longestCommonPrefix = function (strs) {
  let list = new Trie();
  let result = "";

  for (const str of strs) {
    //배열을 순회하며 문자열을 insert.
    if (str === "") return "";
    list.insert(str);
  }

  let node = list.root; // Trie의 root node 부터 시작합니다.

  while (node.children.length === 1) {
    // children의 갯수가 1이라면 계속 반복.
    const child = node.children[0];
    result += child.value;
    if (child.isEnd) return result; //해당 node에서 끝나는 단어가 있다면 종료.
    node = child; //다음 node로 이동
  }

  return result;
};

// /**
//  * @param {string[]} strs
//  * @return {string}
//  */
// var longestCommonPrefix = function (strs) {
//   let root = createNode("");
//   let result = "";
//   for (const str of strs) {
//     if (str === "") return "";
//     insertinString(str, root);
//   }

//   while (root.children.length === 1) {
//     root = root.children[0];
//     result += root.value;
//     if (root.isEnd) return result;
//   }

//   return result;
// };

// function createNode(value) {
//   return { value, children: [], isEnd: false };
// }

// function findChild(value, list) {
//   return list.children.find((v) => v.value === value) || null;
// }

// function insertinString(str, root) {
//   let currentNode = root;
//   for (const word of str) {
//     let child = findChild(word, currentNode);

//     if (!child) {
//       child = createNode(word);
//       currentNode.children.push(child);
//     }
//     currentNode = child;
//   }
//   currentNode.isEnd = true;
// }

const testCase = ["flower", "flow", "flight"];
console.log(longestCommonPrefix(testCase));
