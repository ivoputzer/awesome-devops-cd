const { Readable } = require('stream')
const { strictEqual, deepStrictEqual } = require('assert')
const { requestHandlerFor } = require('../lib/requestHandlerFor')

describe('lib/requestHandlerFor', function () {
  describe('.requestHandlerFor', function () {
    it('is callable', () => {
      strictEqual(typeof requestHandlerFor, 'function')
    })
  })
})
