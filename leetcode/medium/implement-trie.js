class Trie {
  constructor() {
    this.root = this.createNode("");
  }

  createNode(word) {
    return { value: word, children: [], isEnd: false };
  }

  findNode(word, list) {
    return list.children.find((v) => v.value === word) || null;
  }

  insert(str) {
    let current = this.root;
    for (const word of str) {
      let child = this.findNode(word, current);
      if (!child) {
        child = this.createNode(word);
        current.children.push(child);
      }
      current = child;
    }
    current.isEnd = true;
  }

  search(str) {
    let current = this.root;
    for (const word of str) {
      const findNode = this.findNode(word, current);
      if (!findNode) return false;
      current = findNode;
    }
    return current.isEnd;
  }

  startsWith(str) {
    let current = this.root;
    for (const word of str) {
      const findNode = this.findNode(word, current);
      if (!findNode) return false;
      current = findNode;
    }
    return true;
  }
}

var trie = function (orders, words) {
  const result = [];
  let newTrie = new Trie();

  orders.forEach((order, index) => {
    switch (order) {
      case "Trie":
        newTrie = new Trie();
        result.push(null);
        break;

      case "insert":
        newTrie.insert(words[index][0]);
        result.push(null);
        break;

      case "search":
        result.push(newTrie.search(words[index][0]));
        break;

      case "startsWith":
        result.push(newTrie.startsWith(words[index][0]));
        break;
    }
  });
  return result;
};

console.log(trie(["Trie", "startsWith"], [[], ["a"]]));
