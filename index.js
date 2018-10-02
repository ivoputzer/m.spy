exports.spy = (realFn) => {
  const fn = (...args) => {
    fn.called = true
    fn.notCalled = false
    fn.args.push(args)
    fn.callCount = fn.args.length

    if (typeof realFn === 'function') {
      return realFn(...args)
    }
  }
  fn.called = false
  fn.notCalled = true
  fn.callCount = 0
  fn.args = []
  fn.calledWith = (...expected) => {
    return fn.args.some(args => {
      return expected.every((expectedArg, i) => expectedArg === args[i])
    })
  }
  return fn
}
