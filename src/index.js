const bot = require('./bot')

module.exports.run = (cfg) => {
  if (!cfg.bot.token) throw new Error('Open \'config.json\' and add a token')
  bot.login(cfg)
}
