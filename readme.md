m.spy
===
**[m(icro)](https://github.com/ivoputzer/m.cro#readme)[spy](https://github.com/ivoputzer/m.spy) is a simple test spy implementation written in es6+**

[![travis](https://img.shields.io/travis/ivoputzer/m.spy.svg?style=for-the-badge)](https://travis-ci.org/ivoputzer/m.spy)
[![dependencies](https://img.shields.io/badge/dependencies-none-blue.svg?style=for-the-badge&colorB=44CC11)](package.json)
[![coverage status](https://img.shields.io/coveralls/ivoputzer/m.spy.svg?style=for-the-badge)](https://coveralls.io/github/ivoputzer/m.spy?branch=master)
[![linter](https://img.shields.io/badge/coding%20style-standard-brightgreen.svg?style=for-the-badge)](http://standardjs.com/)

[![node](https://img.shields.io/badge/node-6%2B-blue.svg?style=for-the-badge)](https://nodejs.org/docs/v6.0.0/api)
[![version](https://img.shields.io/npm/v/m.spy.svg?style=for-the-badge&colorB=007EC6)](https://www.npmjs.com/package/m.spy)
[![license](https://img.shields.io/badge/license-MIT-blue.svg?style=for-the-badge&colorB=007EC6)](https://spdx.org/licenses/MIT)
[![minzip](https://img.shields.io/bundlephobia/minzip/m.spy.svg?style=for-the-badge)](https://bundlephobia.com/scan-results?packages=m.spy)
[![downloads](https://img.shields.io/npm/dt/m.args.svg?style=for-the-badge&colorB=007EC6)](https://www.npmjs.com/package/m.spy)

### What is a test spy?
A test spy is a function that records arguments and thrown exceptions (if any) for all its calls.

### Creating a spy as an anonymous function
The spy won’t do anything except record information about its calls. A common use case for this type of spy is testing how a function handles a callback:

```javascript
const {spy} = require('m.spy')

test('calls listeners on event', () => {
  const callback = spy()
  const emitter = new EventEmitter()

  emitter.on('event', callback)
  emitter.emit('event')

  assertTrue(callback.called)
})
```

#### spy.called
`true` if the spy was called at least once.

#### spy.notCalled
`true` if the spy was not called.
