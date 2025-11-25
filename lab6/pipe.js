const pipe = (...fns) => {
  for (const fn of fns) {
    if (typeof fn !== "function") {
      throw new TypeError("pipe() accepts only functions");
    }
  }

  return x => {
    let result = x;
    for (const fn of fns) {
      result = fn(result);
    }
    return result;
  };
};

const inc = x => ++x;
const twice = x => x * 2;
const cube = x => x ** 3;

const f = pipe(inc, twice, cube);
console.log(f(5));

const g = pipe(inc, inc);
console.log(g(7));

