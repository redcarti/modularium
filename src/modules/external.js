const fs = require('fs')
const path = require('path')

module.exports = (plugin, config) => {
  if (config.features.plugins.loadLocal) {
    plugin.bot.on('ready', () => {
      try {
        let files = fs.readdirSync(path.join(process.cwd(), 'modules'))
        files = files.filter((el) => { return el.split('.')[1] === 'js' })

        files.forEach(module => {
          if (module.startsWith(';')) {
            if (config.features.plugins.logSkipped) plugin.plinfo(plugin.localeString('mb.0002', module.split('.')[0].slice(1)) + '[MB#0002-EXT]'.x240)
            return
          }
          const pl = require(path.join(process.cwd(), 'modules/' + module))

          if (typeof pl === 'function') {
            pl(plugin, config)
            plugin.list.external.push(module.split('.')[0])
            if (config.features.plugins.log) plugin.plinfo(plugin.localeString('plugins.loaded', module.split('.')[0]))
          } else {
            if (config.features.mbErrors) plugin.plinfo(`[${'ERR'.x196}] ` + plugin.localeString('mb.0001', module.split('.')[0]) + '[MB#0001-EXT]'.x240)
          }
        })
      } catch (err) {
        console.error(err)
      }
    })
  }
}
