const path = require('path')
const { RopePlugin } = require('./lib/Rope')

const recRequire = require('./lib/recrequire')

module.exports = async (bot, config) => {
  const plugin = new RopePlugin(bot)

  new Promise((resolve, reject) => {
    Object.entries(recRequire(path.join(__dirname, 'modules'))).forEach(([name, pl]) => {
      if (typeof pl === 'function' || typeof pl.plugin === 'function') {
        plugin.list.internal.set(name, {
          name,
          plugin: pl || pl.plugin,
          enabled: true
        })
      } else {
        if (config.features.mbErrors) {
          plugin.pluginInfo('Ошибка, внутренний плагин \'' + name + '\' не может быть загружен. [MB#0001-IN]')
        }
      }
    })

    resolve()
  })
    .then(() => {
      plugin.list.internal.forEach((pl) => pl.plugin(plugin, config))
    })
    .catch(console.error)

  return plugin
}
