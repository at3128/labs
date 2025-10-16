function fn() {
  const obj1 = { name: 'Marcus' };
  let obj2 = { name: 'Aurelius' };

  obj1.name = 'Marcus Aurelius';
  obj2.name = 'Marcus Aurelius';

  console.log(obj1, obj2)

  // Не можна переназначати константу obj1, буде помилка
  // obj1 = { name: 'Andrii' }; // Помилка
  obj2 = { name: 'Andrii' }; // Можна, бо obj2 — змінна

  console.log(obj1, obj2);
}

fn();


function createUser(name, city) {
  return { name, city };
}

console.log(createUser('Marcus Aurelius', 'Roma'));
