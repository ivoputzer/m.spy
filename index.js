exports.spy = () => {
  const fn = () => {
    fn.called = true
    fn.notCalled = false
  }
  fn.called = false
  fn.notCalled = true
  return fn
}
