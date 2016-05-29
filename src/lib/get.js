export default (path = '') => (object = {}) => {
  const reducer = (child, key) => {
    return isObject(child) ? child[key] : undefined
  }

  return path.split('.').reduce(reducer, object)
}

function isObject (value) {
  return value === Object(value)
}
