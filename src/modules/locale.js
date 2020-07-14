const fs = require('fs')
const path = require('path')
const _ = require('lodash')

const get = (object, path, value) => {
    const pathArray = Array.isArray(path) ? path : path.split('.').filter(key => key)
    const pathArrayFlat = pathArray.flatMap(part => typeof part === 'string' ? part.split('.') : part)
  
    return pathArrayFlat.reduce((obj, key) => obj && obj[key], object) || value
  }

module.exports = (plugin, config) => {
    plugin.locale = JSON.parse(fs.readFileSync(path.join(process.cwd(), 'locale/'+config.lang+'.json'), {encoding:'utf8'}))
    plugin.localeString = (string, ...addVal) => {
        return plugin.localeGetString(string, addVal)
    }

    plugin.localeGetString = (path, info) => {
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