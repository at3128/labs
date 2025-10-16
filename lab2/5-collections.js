const phones = [
  { name: 'Marcus Aurelius', phone: '+380445554433' },
  { name: 'Andrii', phone: '+380501112233' },
  { name: 'Dima', phone: '+380671234567' },
];

function findPhoneByName(name) {
  for (const record of phones) {
    if (record.name === name) return record.phone;
  }
  return 'Номер не знайдено';
}

const phoneBook = {
  'Marcus Aurelius': '+380445554433',
  'Andrii': '+380501112233',
  'Dima': '+380671234567',
};

function findPhoneByNameHash(name) {
  return phoneBook[name] || 'Номер не знайдено';
}

console.log(findPhoneByName('Andrii'));
console.log(findPhoneByNameHash('Dima'));
