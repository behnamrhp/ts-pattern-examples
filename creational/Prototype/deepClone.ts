const deepClone = function<T>(toClone: T): T {
  if(typeof toClone !== 'object' || !toClone) return toClone

  let deepCloned = Array.isArray(toClone) ? [] : {}

  for(const key in toClone) {
    const value = toClone[key]
    deepCloned = deepClone(value)
  }

  return deepCloned as T
}

export default deepClone;