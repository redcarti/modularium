const pkg = require('../../package.json')
var checkUpdate = require('check-update-github')

module.exports = (plugin, config) => {
  plugin.bot.on('ready', () => {
    if (config.features.updates) {
      checkUpdate({
        name: pkg.name,
        currentVersion: pkg.ver,
        user: 'redcarti',
        branch: 'master'
      }, function (err, latestVersion) {
        if (err) plugin.upinfo(err)
        plugin.needToUpd = latestVersion !== pkg.version ? true : false
        plugin.upinfo(latestVersion !== pkg.version ? 'Вышло обновление: ' + latestVersion + '. Напиши в консоль ' + 'npm update'.xb16 : 'Обновлений нет')
      })
    }
  })
}
