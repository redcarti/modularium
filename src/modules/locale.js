const fs = require('fs')
const fsextra = require('fs-extra')
const path = require('path')

const get = (object, path, value) => {
  const pathArray = Array.isArray(path) ? path : path.split('.').filter(key => key)
  const pathArrayFlat = pathArray.flatMap(part => typeof part === 'string' ? part.split('.') : part)

  return pathArrayFlat.reduce((obj, key) => obj && obj[key], object) || value
}

module.exports = (plugin, config) => {
  fsextra.mkdirp(path.join(process.cwd(), 'locale'))
  fs.readFile(path.join(process.cwd(), 'locale/' + config.lang + '.json'), { encoding: 'utf8' }, (err, data) => {
    if (err) plugin.locale = { ...plugin.locale, ...{} }
    else plugin.locale = { ...plugin.locale, ...JSON.parse(data) }
  }) 
  const intlocalefile = fs.readFileSync(path.join(__dirname, '../locale/' + config.lang + '.json'), { encoding: 'utf8' }) || {}
  plugin.locale = { ...plugin.locale, ...JSON.parse(intlocalefile) }
  plugin.localeString = (string, ...addVal) => {
    return plugin._localeGetString(string, ...addVal)
  }

  plugin._localeGetString = (path, ...info) => {
    var st = get(plugin.locale, path, path)
    if (info) {
      var splitted = st.split(/(%s|%[0-9]\$s)/)
      var sindex = 0
      splitted.forEach((str, i) => {
        if (/(%s)/.test(str)) {
          splitted[i] = info[sindex]
          sindex++
        } else if (/(%[0-9]\$s)/.test(str)) {
          const iex = /(?!(\$s|%))([0-9]+)/.exec(str)[0] - 1
          splitted[i] = info[iex]
        }
      })
      return splitted.join('')
    } else return st
  }
}
