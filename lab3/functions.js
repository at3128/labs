function random(min, max) {
  if (max === undefined) {
    max = min;
    min = 0;
  }

  min = Math.floor(min);
  max = Math.floor(max);

  if (max <= min) return min;
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


function generateKey(length, characters) {
  length = Math.max(0, Math.floor(length));
  if (!characters || characters.length === 0) return '';
  let result = '';
  for (let i = 0; i < length; i++) {
    const idx = random(0, characters.length - 1);
    result += characters[idx];
  }
  return result;
}


function ipToNumber(ip = '127.0.0.1') {
  const parts = String(ip).split('.').map(x => parseInt(x, 10) || 0).slice(0, 4);
  while (parts.length < 4) parts.push(0);
  return parts.reduce((acc, octet, idx) => {
    const shift = (3 - idx) * 8;
    return acc + (octet << shift);
  }, 0);
}


function inspectFunctions(iface) {
  if (iface == null) return [];
  return Object.keys(iface)
    .filter(k => typeof iface[k] === 'function')
    .map(k => [k, iface[k].length]);
}


if (require.main === module) {
  console.log(' random examples:');
  console.log('random(5) ->', random(5));
  console.log('random(2, 7) ->', random(2, 7));

  console.log('\n generateKey examples:');
  const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
  console.log('key(16):', generateKey(16, characters));
  console.log('key(0):', generateKey(0, characters));

  console.log('\n ipToNumber examples:');
  const ips = ['127.0.0.1', '10.0.0.1', '192.168.1.10', '165.225.133.150', '0.0.0.0', '8.8.8.8'];
  for (const ip of ips) {
    const num = ipToNumber(ip);
    const hex = (num >>> 0).toString(16).padStart(8, '0');
    console.log(ip, '->', num, '(0x' + hex + ')');
  }

  console.log('\n inspectFunctions example:');
  const iface = {
    m1: x => [x],
    m2: function (x, y) { return [x, y]; },
    m3(x, y, z) { return [x, y, z]; },
    notFn: 123,
  };
  console.log(inspectFunctions(iface));
}


module.exports = { random, generateKey, ipToNumber, inspectFunctions };
