function average(a, b) {
  return (a + b) / 2;
}

console.log(average(10, 20));


function square(x) {
  return x * x;
}

console.log(square(4));


function cube(x) {
  return x * x * x;
}

console.log(cube(4));


function calculate() {
  const result = [];
  for (let i = 0; i <= 9; i++) {
    const sq = square(i);
    const cb = cube(i);
    result.push(average(sq, cb));
  }
  return result;
}

console.log(calculate());
