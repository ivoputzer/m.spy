exports.spy = () => {
  const fn = (...args) => {
    fn.called = true
    fn.notCalled = false
    fn.callCount++
    fn.args.push(args)
    fn.calledWith = (...expected) => {
      return fn.args.some(args => {
        return expected.every((expectedArg, i) => expectedArg === args[i])
      })
    }
  }
  fn.called = false
  fn.notCalled = true
  fn.callCount = 0
  fn.args = []
  fn.calledWith = () => false
  return fn
}
