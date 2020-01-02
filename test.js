const tap = require('tap')

const Emitter = require('./')

function delay (ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

const emitter = new Emitter()
const queue = []

emitter.on('test', async () => {
  queue.push(1)
  await delay(50)
  queue.push(4)
  return 1
})

emitter.on('test', async () => {
  queue.push(2)
  await delay(10)
  queue.push(3)
  return 2
})

emitter.emit('test').then(result => {
  tap.deepEqual(result, [1, 2], 'returns results')
  tap.deepEqual(queue, [1, 2, 3, 4], 'is parallel')
})

tap.resolves(emitter.emit('nothing'), 'still produces a promise when there are no listeners')
