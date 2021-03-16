const { Client } = require('discord.js')

const ms = require('./modules')

module.exports.login = (cfg) => {
  const { options, token } = cfg.bot
  const bot = new Client(options || {})
  bot.login(token)
  ms(bot, cfg)
}
