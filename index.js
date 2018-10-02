exports.spy = (realFn) => {
  const fn = (...args) => {
    fn.called = true
    fn.notCalled = false
    fn.args.push(args)
    fn.callCount = fn.args.length

    if (typeof realFn === 'function') {
      let realReturn = realFn(...args)
      fn.returns.push(realReturn)
      return realReturn
    }

    return null
  }
  fn.called = false
  fn.notCalled = true
  fn.callCount = 0
  fn.args = []
  fn.returns = []
  fn.returned = (expected) => fn.returns.some(returned => expected === returned)
  fn.calledWith = (...expected) => {
    return fn.args.some(args => {
      return expected.every((expectedArg, i) => expectedArg === args[i])
    })
  }
  return fn
}
