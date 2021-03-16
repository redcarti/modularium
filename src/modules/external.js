const fsextra = require('fs-extra')
const path = require('path')
const recRequire = require('../lib/recrequire')

/**
 * Module that loads external modules
 */
module.exports = (plugin, config) => {
  if (config.features.plugins.loadLocal) {
    plugin.bot.on('ready', () => {
      try {
        const modulesPath = path.join(process.cwd(), 'modules')
        fsextra.mkdirpSync(modulesPath)

        const files = recRequire(modulesPath, /^(?!;)(.+)(\.js)$/)

        Object.entries(files).forEach(([name, pl]) => {
          if (typeof pl === 'function' || typeof pl.plugin === 'function') {
            if (config.features.plugins.log) { plugin.pluginInfo(plugin.localeString('plugins.loaded', name)) }
            plugin.list.external.set(name, pl || pl.plugin)
            plugin.list.external.get(name)(plugin, config)
          } else {
            if (config.features.mbErrors) 
              plugin.pluginInfo(`[${'ERR'.x196}] ` + plugin.localeString('mb.0001', name) + '[MB#0001-EXT]'.x240)
          }
        })
      } catch (err) {
        if (err.name === 'FoxError') { plugin.foxLog(`[${'ERR'.x196}] ` + err.name + ': ' + err.message) } else { plugin.err('Catched error\n' + err.name + ': ' + err.message + '\n' + err.stack) }
      }
    })
  }
}
