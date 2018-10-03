function deepEqual (expected, actual) {
  if (!expected || !actual) return false
  if (typeof expected !== typeof actual) return false
  if (typeof expected !== 'object') return expected === actual

  return Object.keys(expected).length === Object.keys(actual).length &&
         Object.keys(expected).every(key => deepEqual(expected[key], actual[key]))
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
