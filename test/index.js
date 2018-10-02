const { strictEqual, deepStrictEqual } = require('assert')

test('m.spy', () => {
  const { spy } = require('..')

  test('is callable', () => {
    strictEqual(typeof spy, 'function')
  })

  test('returns spy function', () => {
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

    test('.callCount', () => {
      test('defaults to `0`', () => {
        strictEqual(spy().callCount, 0)
      })

      test('contains the number of recorded calls', () => {
        const fn = spy()
        fn()
        fn()
        strictEqual(fn.callCount, 2)
      })
    })

    test('.args', () => {
      test('defaults to an empty array', () => {
        deepStrictEqual(spy().args, [])
      })

      test('contains array of arguments received for every call', () => {
        const fn = spy()
        fn(1)
        fn(2)
        deepStrictEqual(fn.args, [[1], [2]])
      })
    })

    test('.calledWith', () => {
      test('defaults to `false`', () => {
        deepStrictEqual(spy().calledWith(), false)
      })

      test('is true if spy was called at least once with the provided arguments', () => {
        const fn = spy()
        fn(1, 2)
        deepStrictEqual(fn.calledWith(1, 2), true)
      })
    })

    test('returns a spy that wraps the spied function', () => {
      test('returns the real result', () => {
        const fn = spy((arg1, arg2) => arg1 + arg2)
        const returned = fn('a', 'b')
        strictEqual(returned, 'ab')
      })

      test('.returned(arg) is true if spied function returns the arg', () => {
        const fn = spy(() => 'hello')
        fn()
        strictEqual(fn.returned('hello'), true)
      })

      test('.returned(arg) is false if spied function does not return the arg', () => {
        const fn = spy(() => 'hello')
        fn()
        strictEqual(fn.returned('not returned'), false)
      })
    })
  })
})
