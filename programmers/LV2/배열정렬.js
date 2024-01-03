const arr = [5, 3, 6, 2, 1];

const operate = (arr) => {
  for (i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      let temp;
      temp = arr[i];
      arr[i] = arr[i + 1];
      arr[i + 1] = temp;
      i = -1;
    }
  }
  console.log(arr);
};

operate(arr);
