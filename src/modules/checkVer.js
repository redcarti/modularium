const pkg = require('../../package.json')
var checkUpdate = require('check-update-github')

module.exports = (plugin, config) => {
  plugin.bot.on('ready', () => {
    checkUpdate({
      name: pkg.name,
      currentVersion: pkg.ver,
      user: 'redcarti',
      branch: 'master'
    }, function (err, latestVersion, needToUpd) {
      if (err) plugin.upinfo(err)
      if (config.features.updates) plugin.upinfo(latestVersion !== pkg.version ? 'Вышло обновление: ' + latestVersion + '. Напиши в консоль ' + 'npm update'.xb16 : 'Обновлений нет')
    })
  })
}
