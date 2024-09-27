class Trie {
  constructor() {
    this.root = this.createNode("");
  }

  createNode(word) {
    return { value: word, children: [], count: 1 };
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
      } else {
        child.count++;
      }
      current = child;
    }
  }

  searchCount(str) {
    let current = this.root;
    let searchCount = 0;
    for (const word of str) {
      const child = this.findNode(word, current);
      if (!child) {
        console.log("no exist child");
        return;
      }
      searchCount += child.count;
      current = child;
    }
    return searchCount;
  }
}

/**
 * @param {string[]} words
 * @return {number[]}
 */
var sumPrefixScores = function (words) {
  const result = [];
  const dict = new Trie();
  words.forEach((word) => {
    dict.insert(word);
  });

  words.forEach((word) => {
    result.push(dict.searchCount(word));
  });

  return result;
};

console.log(sumPrefixScores(["abc", "ab", "bc", "b"]));
