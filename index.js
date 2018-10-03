function deepEqual(expected, actual) {
  let expectedType = typeof expected

  if (!expected || !actual) return false
  if (expectedType !== typeof actual) return false

  if (expectedType === 'object') {
    return Object.keys(expected).length === Object.keys(actual).length &&
      Object.keys(expected).every(key => deepEqual(expected[key], actual[key]))
  }

  if (expectedType === 'array') {
    return expected.length === actual.length &&
           expected.every(exp, index => deepEqual(exp, actual[index]))
  }

  return expected === actual
}

exports.spy = (spiedFn) => {
  const fn = (...args) => {
    fn.called = true
    fn.notCalled = false
    fn.args.push(args)
    fn.callCount = fn.args.length

    if (typeof spiedFn === 'function') {
      let spiedReturn = spiedFn(...args)
      fn.returns.push(spiedReturn)
      return spiedReturn
    }

    return null
  }
  fn.called = false
  fn.notCalled = true
  fn.callCount = 0
  fn.args = []
  fn.returns = []
  fn.returned = (expected) => fn.returns.some(returned => deepEqual(expected, returned))
  fn.calledWith = (...expected) => {
    return fn.args.some(args => {
      return expected.every((expectedArg, i) => expectedArg === args[i])
    })
  }
  return fn
}
