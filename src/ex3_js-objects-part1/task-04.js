function getNewObj(str, obj) {
  if (obj.hasOwnProperty(str)) {
    return { ...obj };
  }

  return { ...obj, [str]: 'new' };
}

module.exports = getNewObj;
