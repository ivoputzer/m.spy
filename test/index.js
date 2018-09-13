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
      test('defaults to `false`', () => {
        equal(spy().called, false)
      })

      test('is `true` if the spy was called at least once', () => {
        const fn = spy()
        fn()
        equal(fn.called, true)
      })
    })

    test('.notCalled', () => {
      test('defaults to `true`', () => {
        equal(spy().notCalled, true)
      })

      test('is `false` if the spy was called', () => {
        const fn = spy()
        fn()
        equal(fn.notCalled, false)
      })
    })
  })
})
