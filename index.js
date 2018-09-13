exports.spy = () => {
  const fn = (...args) => {
    fn.called = true
    fn.notCalled = false
    fn.callCount++
    fn.args.push(args)
  }
  fn.called = false
  fn.notCalled = true
  fn.callCount = 0
  fn.args = []
  return fn
}
