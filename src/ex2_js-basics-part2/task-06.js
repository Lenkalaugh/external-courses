function getSimple(x) {
  if (x > 1000) {
    return 'данные неверны';
  }

  if (x === 1 || x === 0) {
    return 'Не причисляется ни к простым, ни к составным числам';
  }

  for (let i = 2; i < x - 1; i++) {
    if (x % i === 0) {
      return `Число ${x} - составное число`;
    }
  }

  return `Число ${x} - простое число`;
}

module.exports = getSimple;
