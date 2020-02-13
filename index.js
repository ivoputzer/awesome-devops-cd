const { createServer } = require('http')
const { toString } = require('./lib/stream')
const { storageFor } = require('./lib/storage')
const { requestHandlerFor } = require('./lib/requestHandlerFor')

console.log('-- port', process.env.npm_package_config_http_port)

const storage = storageFor()
const requestHandler = requestHandlerFor(storage)

createServer(requestHandler)
  .listen(process.env.npm_package_config_http_port, function onceListening () {
    console.log('-- listening on:', this.address())
  })
