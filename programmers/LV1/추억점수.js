const NAME = ["may", "kein", "kain", "radi"];
const YEARNING = [5, 10, 1, 3];
const PHOTO = [["may"], ["kein", "deny", "may"], ["kon", "coni"]];

function solution(name, yearning, photo) {
  const object = {};
  const result = [];
  for (i = 0; i < name.length; i++) {
    object[name[i]] = yearning[i];
  }

  PHOTO.forEach((v) => {
    let sum = 0;
    v.forEach((v2) => {
      !!object[v2] ? (sum += object[v2]) : (sum += 0);
    });
    result.push(sum);
  });
  return result;
}

solution(NAME, YEARNING, PHOTO);
