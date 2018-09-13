test('m.spy', () => {
  const {spy} = require('..')
  const {equal} = require('assert')

  test('is undefined', () => {
    equal(spy, undefined)
  })
})
