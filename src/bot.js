const Discord = require('discord.js')

const ms = require('./modules')

module.exports.login = (cfg) => {
  const bot = new Discord.Client(cfg.bot.options)
  bot.login(cfg.bot.token)
  ms(bot, cfg)
}
