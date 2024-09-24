/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function (bills) {
  const dict = {
    5: 0,
    10: 0,
  };

  for (let i = 0; i < bills.length; i++) {
    dict[bills[i]]++;

    if (bills[i] === 10) {
      if (dict[5]) {
        dict[5]--;
        console.log(dict);
      } else {
        return false;
      }
    }

    if (bills[i] === 20) {
      if ((dict[10] && dict[5]) || dict[5] >= 3) {
        if (dict[10]) {
          dict[10]--;
          dict[5]--;
        } else {
          dict[5] -= 3;
        }
      } else {
        return false;
      }
    }
  }

  return true;
};

console.log(
  lemonadeChange([
    5, 5, 10, 20, 5, 5, 5, 5, 5, 5, 5, 5, 5, 10, 5, 5, 20, 5, 20, 5,
  ])
);
