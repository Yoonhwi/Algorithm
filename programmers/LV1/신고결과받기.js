const id_list = ["muzi", "frodo", "apeach", "neo"];
const report = [
  "muzi frodo",
  "apeach frodo",
  "frodo neo",
  "muzi neo",
  "apeach muzi",
  "apeach muzi",
];
const k = 2;

function solution(id_list, report, k) {
  const reportObject = {};
  id_list.forEach((v) => (reportObject[v] = 0));
  const reportedObject = { ...reportObject };
  const setReport = [...new Set(report)];
  setReport.forEach((v) => {
    reportedObject[v.split(" ")[1]] += 1;
  });
  const ban = [];
  id_list.forEach((v) => (reportedObject[v] >= k ? ban.push(v) : ""));
  setReport.forEach((v) => {
    if (ban.indexOf(v.split(" ")[1]) !== -1) {
      reportObject[v.split(" ")[0]] += 1;
    }
  });
  const answer = id_list.map((v) => {
    return reportObject[v];
  });
  return answer;
}

solution(id_list, report, k);
