exports.toString = (readable, callback) => {
  const buffer = []
  readable.on('data', chunk => buffer.push(chunk))
  readable.on('end', () => {
    const string = Buffer.concat(buffer).toString('utf8')
    callback(string)
  })
}
