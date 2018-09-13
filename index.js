exports.spy = () => {
  const fn = () => {
    fn.called = true
    fn.notCalled = false
    fn.callCount++
  }
  fn.called = false
  fn.notCalled = true
  fn.callCount = 0
  return fn
}
