module.exports = (plugin, config) => {
  plugin.bot.on('message', msg => {
    if (!msg.content.startsWith(config.bot.prefix) || msg.author.bot) return
    const args = msg.content.slice(config.bot.prefix.length).split(/ +/)
    const command = args.shift().toLowerCase()

    plugin.cmds.use(msg, command, args)
  })
}
