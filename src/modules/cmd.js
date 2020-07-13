const Discord = require('discord.js')

module.exports = (plugin) => {
    plugin.bot.commands = new Discord.Collection();
    plugin.cmds = {
        add: (cmd) => {
            plugin.bot.commands.set(cmd.name, cmd)
        }
    }
}