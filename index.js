
const EventEmitter = require('events')

class ParallelAsyncEmitter extends EventEmitter {
  async emit (event, ...args) {
    const listeners = this.rawListeners(event)
    if (!listeners.length) return

    const promises = []
    for (const listener of listeners) {
      promises.push(listener.apply(this, args))
    }

    return Promise.all(promises)
  }
}

module.exports = ParallelAsyncEmitter
