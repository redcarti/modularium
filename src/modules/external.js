const fs = require('fs')
const fsextra = require('fs-extra')
const path = require('path')
const requireAll = require('require-all')

module.exports = (plugin, config) => {
  if (config.features.plugins.loadLocal) {
    plugin.bot.on('ready', () => {
      try {
        const mpath = path.join(process.cwd(), 'modules')
        fsextra.mkdirpSync(mpath)
        
        const files = requireAll({
          dirname: mpath,
          filter: /^(?!;)(.+)\.js$/
        });   
    
        Object.entries(files).forEach(([name, pl]) => {
          if (typeof pl === 'function' || typeof pl.plugin === 'function') {
            pl.plugin ? pl.plugin(plugin, config) : pl(plugin, config)
            plugin.list.external.set(name, pl || pl.plugin)
            if (config.features.plugins.log) plugin.pluginInfo(plugin.localeString('plugins.loaded', name))
          } else {
            if (config.features.mbErrors) plugin.pluginInfo(`[${'ERR'.x196}] ` + plugin.localeString('mb.0001', name) + '[MB#0001-EXT]'.x240)
          }
        })
      } catch (err) {
        if (err.name === 'FoxError') plugin.foxLog(`[${'ERR'.x196}] ` + err.name + ': ' + err.message)
        else plugin.err('Catched error\n' + err.name + ': ' + err.message + '\n' + err.stack)
      }
    })
  }
}
