const {strictEqual} = require('assert')

test('m.spy', () => {
  const {spy} = require('..')

  test('is callable', () => {
    strictEqual(typeof spy, 'function')
  })

  test('return value', () => {
    test('is callable', () => {
      const fn = spy()
      strictEqual(typeof fn, 'function')
    })

    test('.called', () => {
      test('defaults to `false`', () => {
        strictEqual(spy().called, false)
      })

      test('is `true` if the spy was called at least once', () => {
        const fn = spy()
        fn()
        strictEqual(fn.called, true)
      })
    })

    test('.notCalled', () => {
      test('defaults to `true`', () => {
        strictEqual(spy().notCalled, true)
      })

      test('is `false` if the spy was called', () => {
        const fn = spy()
        fn()
        strictEqual(fn.notCalled, false)
      })
    })
  })
})
