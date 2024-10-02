/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function (path) {
  const stack = [];
  const arr = path.split("/");

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "" || arr[i] === ".") continue;

    if (arr[i] === "..") {
      stack.pop();
      continue;
    }

    stack.push(arr[i]);
  }

  const str = `/${stack.join("/")}`;
  return str;
};

const pathA = "/home/"; // output : "/home"
const pathB = "/home/user/Documents/../Pictures"; // output : "/home/user/Pictures"

console.log(simplifyPath(pathA));
