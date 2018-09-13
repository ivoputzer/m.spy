exports.spy = function spy () {
  const fn = function () {
    fn.called = true
    fn.notCalled = false
  }
  fn.called = false
  fn.notCalled = true
  return fn
}
