# parallel-async-emitter

Async/await-based event emitter which emits in parallel.

## Install

```sh
npm install parallel-async-emitter
```

## Usage

```js
const emitter = new ParallelAsyncEmitter()

function delay (ms) {
  return new Promise(done => setTimeout(done, ms))
}

emitter.on('test', async () => {
  console.log(1)
  await delay(50)
  console.log(4)
  return 1
})

emitter.on('test', async () => {
  console.log(2)
  await delay(10)
  console.log(3)
  return 2
})

await emitter.emit('test') // [ 1, 2 ]
```

---

### Copyright (c) 2020 Stephen Belanger
#### Licensed under MIT License

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
