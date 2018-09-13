exports.spy = function spy () {
  const fn = function () {
    fn.called = true
  }
  fn.called = false
  return fn
}
