const Discord = require('discord.js')

module.exports = (plugin, config) => {
    plugin.bot.commands = new Discord.Collection();
    plugin.cmds = {
        add: (cmd) => {
            plugin.bot.commands.set(cmd.name, cmd)
        },
        remove: (cmd) => {
            plugin.bot.commands.delete(cmd)
        },
        turn: (command) => {
            let cmd = plugin.bot.commands.find(cmd => {
                if(!cmd.aliases) return cmd.name === command
                else return cmd.name === command || command === cmd.aliases.find(o => o === command)
            })

            cmd.off = !cmd.off
        },
        use: (msg, command, args) => {
            let cmd = plugin.bot.commands.find(cmd => {
                if(!cmd.aliases) return cmd.name === command
                else return cmd.name === command || command === cmd.aliases.find(o => o === command)
            })

            if(cmd) if (!cmd.off) cmd.execute(msg, args); else plugin.designs.get('cmdoff')(msg)
            else if(config.features.preventCmdNotFound) plugin.designs.get('cmd404')(msg)
        }
    }
}