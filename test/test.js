const { strictEqual } = require('assert')
const EventEmitter = require('events')
const {spy} = require('..')

test('calls listeners on event', () => {
  const callback = spy()
  const emitter = new EventEmitter()

  emitter.on('event', callback)
  emitter.emit('event')

  strictEqual(callback.called, true)
})

test('wraps the function transparently', () => {
  const sayHello = () => 'hello'
  const sayHelloSpy = spy(sayHello)

  const result = sayHelloSpy()

  strictEqual(result, 'hello')
  strictEqual(sayHelloSpy.returned('hello'), true)
})