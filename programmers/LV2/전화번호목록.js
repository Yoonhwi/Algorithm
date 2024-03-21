function solution2(phone_book) {
  phone_book.sort((a, b) => a.length - b.length);
  for (i = 0; i < phone_book.length; i++) {
    for (j = i; j < phone_book.length; j++) {
      if (i != j) {
        if (phone_book[j].slice(0, phone_book[i].length) === phone_book[i])
          return false;
      }
    }
  }

  return true;
} //시간초과 코드

function solution(phone_book) {
  phone_book.sort();
  for (let i = 0; i < phone_book.length - 1; i++) {
    if (phone_book[i + 1].indexOf(phone_book[i])) return false;
  }

  return true;
}

console.log(solution(phone_book));
