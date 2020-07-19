const Discord = require('discord.js')

module.exports = (plugin, config) => {
  plugin.bot.commands = new Discord.Collection()
  /**
   * Fox command dispatcher
   */
  plugin.commands = {
    add: (cmd) => {
      plugin.bot.commands.set(cmd.base, cmd)
    },
    remove: (command) => {
      const cmd = plugin.commands.find(command)

      plugin.bot.commands.delete(cmd)
    },
    turn: (command, to) => {
      const cmd = plugin.commands.find(command)

      cmd.off = !cmd.off || to
    },
    use: (msg, command, args) => {
      const cmd = plugin.commands.find(command)

      if (cmd) if (!cmd.off) cmd.execute(msg, args); else msg.channel.send(plugin.designs.use('cmdoff', 'Ошибка', 'Команда выключена.'))
      else if (config.features.preventCmdNotFound && command !== '') msg.channel.send(plugin.designs.use('cmd404', 'Ошибка', 'Команда не найдена.'))
    },
    find: (command) => {
      return plugin.bot.commands.find(cmd => {
        if (!cmd.aliases) return cmd.base === command
        else return cmd.base === command || command === cmd.aliases.find(o => o === command)
      })
    },
    parseuse: (msg, commandToParse) => {
      plugin.commands.use(msg, ...plugin.commands.parse(commandToParse))
    },
    parse: (commandToParse) => {
      let args = commandToParse.split(/ +/),
          command = args.shift().toLowerCase()

      return [command, args]
    }
  }

  plugin.bot.on('message', msg => {
    if (!msg.content.startsWith(config.bot.prefix) || msg.author.bot) return
    
    try {
      plugin.commands.parseuse(msg, msg.content.slice(config.bot.prefix.length))
    } catch (err) {
      console.error(err)
    }
  })
}
