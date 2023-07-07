function sumArray(...numbers) {
    return numbers.reduce((o, n) => o + n);
  }
  
  console.log(sumArray(...[1, 2, 3, 4, 5]));
  