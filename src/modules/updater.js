const pkg = require('../../package.json')
var checkUpdate = require('check-update-github')

module.exports = (plugin, config) => {
  plugin.version = {
    current: pkg.version
  }
  
  plugin.bot.on('ready', () => {
    if (config.features.updates) {
      checkUpdate({
        name: pkg.name,
        currentVersion: pkg.version,
        user: 'redcarti',
        branch: 'master'
      }, function (err, latestVersion) {
        if (err) plugin.updateInfo(err)
        plugin.needToUpd = latestVersion !== pkg.version ? true : false
        plugin.version.latest = latestVersion
        plugin.updateInfo(latestVersion !== pkg.version 
          ? plugin.localeString('updates.new_update', latestVersion.xb16, 'npm update'.xb16) + '.'
          : plugin.localeString('updates.no_updates')
        )
      })
    }
  })
}
