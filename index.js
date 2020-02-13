const { createServer } = require('http')

console.log('-- port', process.env.npm_package_config_http_port)

createServer(requestHandler)
  .listen(process.env.npm_package_config_http_port, function onceListening () {
    console.log('-- listening on:', this.address())
  })

function requestHandler (req, res) {
  res.end('hello world')
}
