const Discord = require('discord.js')

module.exports = (plugin, config) => {
  plugin.cmdListeners = new Discord.Collection()
  plugin.cmdListeners.set('message', async msg => {
    if (!msg.content.startsWith(config.bot.prefix) || msg.author.bot) return
  
    try {
      plugin.commands.parseuse(msg, msg.content.slice(config.bot.prefix.length))
    } catch (e) {
      plugin.fox(`[${'ERR'.x196}] ` + e.name + ': ' + e.message)
    }
  })
  plugin.cmdListeners.set('cmd/404', async (msg, cmd) => {
    plugin.fox(plugin.localeString('fox.0001', (msg.author.username + '#' + msg.author.discriminator).xb16, msg.guild.name, cmd.xb16) + '[FOX#0001]'.x240)
    msg.channel.send(plugin.designs.use('cmd404', plugin.localeString('error'), plugin.localeString('cmd.404', cmd)))
  })
  plugin.cmdListeners.set('cmd/off', async (msg, cmd) => {
    plugin.fox(plugin.localeString('fox.0002', (msg.author.username + '#' + msg.author.discriminator).xb16, msg.guild.name, cmd.xb16) + '[FOX#0002]'.x240)
    msg.channel.send(plugin.designs.use('cmdoff', plugin.localeString('error'), plugin.localeString('cmd.off', cmd)))
  })
  plugin.cmdListeners.set('use', async (msg, cmd, args) => {
    plugin.fox(plugin.localeString('fox.use', (msg.author.username + '#' + msg.author.discriminator).xb16, msg.guild.name, cmd.xb16 + (args.length > 0 ? ' '.xb16 + args.join(' ').xb16 : '')))
  })

  // commands
  plugin.bot.on('message', plugin.cmdListeners.get('message'))
  // if cmd not found
  plugin.commands.on('cmd/404', plugin.cmdListeners.get('cmd/404'))
  // if cmd is off
  plugin.commands.on('cmd/off', plugin.cmdListeners.get('cmd/off'))
  // if used
  plugin.commands.on('use', plugin.cmdListeners.get('use'))
}
