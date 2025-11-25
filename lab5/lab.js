function seq(fn) {
  const fns = [fn];

  function chain(arg) {
    if (typeof arg === "function") {
      fns.push(arg);
      return chain;
    }
    let result = arg;
    for (let i = fns.length - 1; i >= 0; i--) {
      result = fns[i](result);
    }
    return result;
  }
  return chain;
}

console.log(
  seq(x => x + 7)
     (x => x * 2)(5)
);
console.log(
  seq(x => x * 2)
     (x => x + 7)(5)
);
console.log(
  seq(x => x + 1)
     (x => x * 2)
     (x => x / 3)
     (x => x - 4)(7)
);



function array() {
  const data = [];
  function arr(index) {
    return data[index];
  }
  arr.push = function(value) {
    data.push(value);
  }
  arr.pop = function() {
    return data.pop();
  }
  return arr;
}

const arr = array();

arr.push('first');
arr.push('second');
arr.push('third');

console.log(arr(0));
console.log(arr(1));
console.log(arr(2));

console.log(arr.pop());
console.log(arr.pop());
console.log(arr.pop());

console.log(arr.pop());