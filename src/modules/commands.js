const Discord = require('discord.js')

module.exports = (plugin, config) => {
  plugin.bot.on('message', msg => {
    if (!msg.content.startsWith(config.bot.prefix) || msg.author.bot) return

    try {
      plugin.commands.parseuse(msg, msg.content.slice(config.bot.prefix.length))
    } catch (e) {
      plugin.fox(`[${'ERR'.x196}] ` + e.name + ': ' + e.message)
    }
  })

  plugin.commands.on('cmd/404', (msg, cmd) => {
    plugin.fox(plugin.localeString('fox.0001', (msg.author.username + '#' + msg.author.discriminator).xb16, msg.guild.name, cmd.xb16) + '[FOX#0001]'.x240)
    msg.channel.send(plugin.designs.use('cmd404', plugin.localeString('error'), plugin.localeString('cmd.404', cmd)))
  })

  plugin.commands.on('cmd/off', (msg, cmd) => {
    plugin.fox(plugin.localeString('fox.0002', (msg.author.username + '#' + msg.author.discriminator).xb16, msg.guild.name, cmd.xb16) + '[FOX#0002]'.x240)
    msg.channel.send(plugin.designs.use('cmdoff', plugin.localeString('error'), plugin.localeString('cmd.off', cmd)))
  })

  plugin.commands.on('use', (msg, cmd, args) => {
    plugin.fox(plugin.localeString('fox.use', (msg.author.username + '#' + msg.author.discriminator).xb16, msg.guild.name, cmd.xb16 + (args.length > 0 ? ' '.xb16 + args.join(' ').xb16 : '')))
  })
}
