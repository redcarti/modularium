const Discord = require('discord.js')
const FoxDispatcher = require('../lib/FoxDispatcher')

module.exports = (plugin, config) => {
  plugin.bot.commands = new Discord.Collection()
  /**
   * Fox command dispatcher
   */
  plugin.commands = new FoxDispatcher()

  plugin.bot.on('message', msg => {
    if (!msg.content.startsWith(config.bot.prefix) || msg.author.bot) return

    try {
      plugin.commands.parseuse(msg, msg.content.slice(config.bot.prefix.length))
    } catch (err) {
      console.error(err)
    }
  })
}
