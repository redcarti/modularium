const Discord = require('discord.js')

/**
 * Main module of modularium commands
 * It's welcome to edit 'cmd/404' and 'cmd/off' listeners but not others
 */
module.exports = (plugin, config) => {
  plugin.cmdListeners = new Discord.Collection()

  plugin.cmdListeners.set('message', async msg => {
    if (!msg.content.startsWith(config.bot.prefix) || msg.author.bot || msg.author.id === plugin.bot.user.id) return

    try {
      plugin.commands.parseuse(msg, msg.content.slice(config.bot.prefix.length))
    } catch (e) {
      plugin.foxLog(`[${'ERR'.x196}] ` + e.name + ': ' + e.message)
    }
  })

  plugin.cmdListeners.set('cmd/404', async (msg, cmd) => {
    plugin.foxLog(plugin.localeString('fox.0001', (msg.author.username + '#' + msg.author.discriminator).xb16, msg.guild.name, cmd.xb16) + '[FOX#0001]'.x240)
    msg.channel.send(plugin.designs.use('simpleEmbed', plugin.localeString('error'), plugin.localeString('cmd.404', cmd)))
  })

  plugin.cmdListeners.set('cmd/off', async (msg, cmd) => {
    plugin.foxLog(plugin.localeString('fox.0002', (msg.author.username + '#' + msg.author.discriminator).xb16, msg.guild.name, cmd.xb16) + '[FOX#0002]'.x240)
    msg.channel.send(plugin.designs.use('simpleEmbed', plugin.localeString('error'), plugin.localeString('cmd.off', cmd)))
  })

  plugin.cmdListeners.set('use', async (msg, cmd, args) => {
    plugin.foxLog(plugin.localeString('fox.use', (msg.author.username + '#' + msg.author.discriminator).xb16, msg.guild.name, cmd.xb16 + (args.length > 0 ? ' '.xb16 + args.join(' ').xb16 : '')))
  })

  plugin.commands.on('cmd/404', plugin.cmdListeners.get('cmd/404'))
  plugin.commands.on('cmd/off', plugin.cmdListeners.get('cmd/off'))
  plugin.commands.on('use', plugin.cmdListeners.get('use'))

  plugin.bot.on('message', plugin.cmdListeners.get('message'))
}
