const pkg = require('../../package.json')
const checkUpdate = require('@modularium/check-update')

/**
 * Updater module
 * If last version on GitHub is different than yours, it will log that there's an update
 */
module.exports = (plugin, config) => {
  plugin.version = {
    current: pkg.version
  }

  plugin.bot.on('ready', () => {
    if (config.features.updates) {
      checkUpdate('modularium', pkg.version)
        .then(({ isNeeded, lastVersion }) => {
          plugin.needToUpdate = isNeeded

          plugin.version.latest = lastVersion

          plugin.updateInfo(isNeeded
            ? plugin.localeString('updates.newUpdate', lastVersion.xb16, 'npm update'.xb16) + '.'
            : plugin.localeString('updates.noUpdates'))
        })
        .catch((err) => {
          if (err.code === 'noSuchVersion') {
            plugin.updateInfo(plugin.localeString('updates.noSuchVersion'))
          } else {
            plugin.err(err)
          }
        })
    }
  })
}
