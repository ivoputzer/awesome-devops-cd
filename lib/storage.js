exports.storageFor = (data = []) => {
  return {
    load () {
      return `[${data.join(',')}]`
    },
    save (item) {
      return data.push(item)
    },
  }
}
