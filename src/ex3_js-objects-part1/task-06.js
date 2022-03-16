function getProperty(object, propertyPath) {
  const path = propertyPath.split('.');
  let property = object;

  for (let i = 0; i < path.length; i++) {
    property = property[path[i]];

    if (!property) {
      return undefined;
    }
  }

  return property;
}

module.exports = getProperty;
