const { createServer } = require('http')

createServer(requestHandler)
  .listen(8080, function onceListening () {
    console.log('--listening on:', this.address())
  })

function requestHandler (req, res) {
  res.end('hello world')
}
