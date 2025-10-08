const array1 = [
  true, 'hello', 5, 12, -200, false, 'word',
  0, 'test', true, 99, null, undefined, { a: 1 }, [1, 2, 3]
];

const typesCount = {
  number: 0,
  string: 0,
  boolean: 0,
  object: 0,
  undefined: 0
};

for (const item of array1) {
  const type = typeof item;
  typesCount[type] = typesCount[type] + 1;
}

console.dir(typesCount);
