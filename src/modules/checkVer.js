let package = require('../../package.json')
var checkUpdate = require('check-update-github');

module.exports = (plugin) => {
    plugin.bot.on('ready', () => {
        checkUpdate({
            name: package.name, 
            currentVersion: package.ver, 
            user: 'redcarti',
            branch: 'master'
          }, function(err, latestVersion, needToUpd){
            plugin.upinfo(latestVersion != package.version ? 'Вышло обновление: ' + latestVersion + '. Напиши в консоль ' + 'npm update'.xb16 : 'Обновлений нет')
          });
    })
}