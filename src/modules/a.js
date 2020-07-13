module.exports = (plugin, config) => {
    if (config.bot.startup) {
        plugin.info(config.bot.startup);
    }

    if (config.bot.generateLink === true) {
        plugin.bot.generateInvite(["ADMINISTRATOR"]).then(link => { 
            plugin.info('Ссылка на приглашение: '+link);
        });
    }
}