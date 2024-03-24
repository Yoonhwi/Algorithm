{
  const readline = require("readline");
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  let input;
  let result = "";
  const inputCb = (line) => {
    input = line.split(" ").map(Number);
  };

  const closeCb = () => {
    const [n, m] = input;
    const seq = new Array(m).fill(0);
    const visited = new Array(n).fill(false);
    let result = "";
    // function dfs(count) {
    //   if (count === y) {
    //     console.log(tempArray);
    //     return;
    //   }

    //   for (i = 0; i < x; i++) {
    //     if (dict[i]) continue;
    //     dict[i] = true;
    //     tempArray.push(i + 1);
    //     dfs(count + 1);
    //     tempArray.pop();
    //     dict[i] = false;
    //   }
    // }
    function dfs(k) {
      if (k === m) {
        return (result += `${seq.join(" ")}\n`);
      }
      for (let i = 1; i <= n; i++) {
        if (!visited[i]) {
          seq[k] = i;
          visited[i] = true;
          dfs(k + 1);
          visited[i] = false;
        }
      }
    }

    dfs(0);
    console.log(result);
  };

  rl.on("line", inputCb).on("close", closeCb);
}
