const PARK = ["SOO", "OOO", "OOO"];
const ROUTES = ["E 2", "S 2", "W 1"];

function solution(park, routes) {
  const result = [];
  let start = { column: 0, row: 0 };
  for (i = 0; i < park.length; i++) {
    result.push([]);
    for (j = 0; j < park[i].length; j++) {
      if (park[i][j] === "O") {
        result[i].push("O");
      } else if (park[i][j] === "S") {
        result[i].push("O");
        start.column = j;
        start.row = i;
      } else {
        result[i].push("X");
      }
    }
  }
  const ROWMAX = park.length - 1;
  const COLUMNMAX = park[0].length - 1;

  let column = start.column;
  let row = start.row;

  for (i = 0; i < routes.length; i++) {
    if (!!operate(routes, column, row, result, ROWMAX, COLUMNMAX)) {
      const finish = operate(routes, column, row, result, ROWMAX, COLUMNMAX);
      column += finish.column;
      row += finish.row;
    }
  }
  console.log(row, column);
}

function operate(routes, column, row, result, ROWMAX, COLUMNMAX) {
  const arrow = routes[i].split(" ")[0];
  let length = Number(routes[i].split(" ")[1]);
  switch (arrow) {
    case "E": {
      if (column + length > COLUMNMAX) break;
      for (j = 1; j <= length; j++) {
        if (result[row][column + j] === "X") {
          return;
        }
      }
      return { column: length, row: 0 };
    }
    case "W": {
      if (column - length < 0) break;
      for (j = 1; j <= length; j++) {
        if (result[row][column - j] === "X") {
          return;
        }
      }
      return { column: -length, row: 0 };
    }
    case "S": {
      if (row + length > ROWMAX) break;
      for (j = 1; j <= length; j++) {
        if (result[row + j][column] === "X") {
          return;
        }
      }
      return { column: 0, row: length };
    }
    case "N": {
      if (row - length < 0) break;
      for (j = 1; j <= length; j++) {
        if (result[row - j][column] === "X") {
          return;
        }
      }
      return { column: 0, row: -length };
    }
  }
}

solution(PARK, ROUTES);
