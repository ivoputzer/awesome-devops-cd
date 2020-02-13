const { Readable } = require('stream')
const { strictEqual, deepStrictEqual } = require('assert')
const { toString } = require('../lib/stream')

describe('lib/stream', function () {
  describe('.toString', function () {
    it('is callable', () => {
      strictEqual(typeof toString, 'function')
    })

    it('transforms readable stream into a string', done => {
      const data = '{"hello":"world"}'
      const readable = new Readable({ read: Function.prototype })

      toString(readable, string => {
        deepStrictEqual(string, data)
        done()
      })

      readable.push(data)
      readable.push(null)
    })
  })
})
