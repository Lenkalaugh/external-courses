function logKeyAndValue(obj) {
  Object.entries(obj).forEach(({ key, value }) => console.log(key, value));

  return undefined;
}

module.exports = logKeyAndValue;
