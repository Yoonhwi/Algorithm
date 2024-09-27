class WordDictionary {
  constructor() {
    this.root = this.createNode("");
  }

  addWord(str) {
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

  search(word) {
    return this._search(this.root, word, 0);
  }

  _search(node, word, index) {
    if (index === word.length) {
      return node.isEnd;
    }

    const char = word[index];

    if (char === ".") {
      for (const child of node.children) {
        if (this._search(child, word, index + 1)) {
          return true;
        }
      }
      return false;
    } else {
      const findNode = this.findNode(char, node);
      if (!findNode) {
        return false;
      }
      return this._search(findNode, word, index + 1);
    }
  }

  createNode(word) {
    return { value: word, children: [], isEnd: false };
  }

  findNode(word, list) {
    return list.children.find((v) => v.value === word) || null;
  }
  findEndNode(list) {
    return list.children.find((v) => v.isEnd === true) || null;
  }
}
var wordDictionary = function (orders, words) {
  const result = [];
  const dict = new WordDictionary();
  orders.forEach((order, index) => {
    switch (order) {
      case "WordDictionary":
        result.push(null);
        break;
      case "addWord":
        dict.addWord(words[index][0]);
        result.push(null);
        break;
      case "search":
        const searchData = dict.search(words[index][0]);
        result.push(searchData ? true : false);
        break;
    }
  });

  return result;
};

console.log(
  wordDictionary(
    [
      "WordDictionary",
      "addWord",
      "addWord",
      "search",
      "search",
      "search",
      "search",
      "search",
      "search",
    ],
    [[], ["a"], ["a"], ["."], ["a"], ["aa"], ["a"], [".a"], ["a."]]
  )
);
