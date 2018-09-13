const {equal} = require('assert')

test('m.spy', () => {
  const {spy} = require('..')

  test('is callable', () => {
    equal(typeof spy, 'function')
  })

  test('return value', () => {
    test('is callable', () => {
      const fn = spy()
      equal(typeof fn, 'function')
    })
    test('.called', () => {
      test('is true if the spy was called at least once', () => {
        const fn = spy()
        fn()
        equal(fn.called, true)
      })

      test('defaults to false', () => {
        const fn = spy()
        equal(fn.called, false)
      })
    })
  })
})
