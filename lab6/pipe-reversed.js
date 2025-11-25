function composeRight(...fns) {
  for (const fn of fns) {
    if (typeof fn !== "function") {
      throw new TypeError("composeRight() takes only functions");
    }
  }

  const handlers = [];

  const composed = function (x) {
    try {
      let result = x;

      for (let i = fns.length - 1; i >= 0; i--) {
        result = fns[i](result);
      }

      return result;

    } catch (e) {
      for (const h of handlers) h(e);
      return undefined;
    }
  };

  composed.on = function (event, handler) {
    if (event === "error") handlers.push(handler);
    return composed;
  };

  return composed;
}


const bad = x => {
  if (x === 5) throw new Error("Bad input");
  return x + 1;
};

const inc = x => x + 1;
const dec = x => x - 1;

const f = composeRight(bad, inc, dec);

f.on("error", err => {
  console.log("Ошибка:", err.message);
});

console.log(f(10));
console.log(f(5));
