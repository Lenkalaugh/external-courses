function getType(x) {
  if (typeof x === 'string') {
    return 'string';
  }

  if (typeof x === 'number' && isNaN(x)) {
    return 'number';
  }

  return undefined;
}

module.exports = getType;
