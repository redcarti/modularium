const fs = require('fs')
const fsextra = require('fs-extra')
const path = require('path')
const { LocaleManager } = require('../lib/LocaleManager')

/**
 * Localization module
 */
module.exports = (plugin, config) => {
  fsextra.mkdirp(path.join(process.cwd(), 'locale'))
  plugin.locale = new LocaleManager()
  plugin.localeString = (key, ...rest) => plugin.locale.localeString(key, ...rest)

  fs.readFile(path.join(__dirname, '../locale/' + config.lang + '.json'), { encoding: 'utf8' }, (err, data) => {
    if (err) {
      plugin.err(err.message)
      return
    }
    const jsdata = JSON.parse(data)
    // jsdata = LocaleManager.flat(jsdata)
    Object.entries(jsdata).forEach(([key, val]) => {
      plugin.locale.add(key, val)
    })
  })
}
