const fs = require('fs')
const path = require('path')

module.exports = (directory, regexp = /\.js$/) => {
  const getFiles = (obj, dir) => {
    fs.readdirSync(dir).forEach(file => {
      if (fs.statSync(path.join(dir, file)).isDirectory()) {
        getFiles(obj, path.join(dir, file))
      } else if (regexp.test(file)) {
        file = path.basename(file, '.js')
        obj[file] = require(path.join(dir, file))
      }
    })
  }
  const object = {}

  getFiles(object, directory)

  return object
}
