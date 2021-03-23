const bot = require('./bot')
require('colors-cli/toxic')

class Config {
  constructor (config) {
    let proto = Object.getPrototypeOf(this)

    proto = { ...proto, ...config }

    Object.setPrototypeOf(this, proto)

    if (!this.bot.token) {
      console.log('Please, provide a token in a config\n\nExample:\nmodularium.run({\n  bot: {\n    token: \'here_goes_your_token\'\n  }\n})')
      process.exit(1337)
    }
  }
}

module.exports.run = async (cfg) => {
  const config = new Config(cfg)

  bot.login(config)
}
