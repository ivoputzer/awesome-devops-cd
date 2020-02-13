exports.requestHandlerFor = (store) => {
  return (req, res) => {
    if (req.method === 'GET') {
      res.writeHead(200, { 'Content-Type': 'application/json' })
      res.end(store.load())
    }
    if (req.method === 'POST') {
      toString(req, data => store.save(data))
      res.writeHead(201)
      res.end()
    }
  }
}
