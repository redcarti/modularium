const bot = require('./bot')
require('colors-cli/toxic')

class Config {
  constructor (config) {
    let proto = Object.getPrototypeOf(this)

    proto = { ...proto, ...config }

    Object.setPrototypeOf(this, proto)

    console.log(this)

    if (!this.bot.token) {
      throw new Error(
        `Please, provide a token in a config
      
        Example:
        modularium.run({
          bot: {
            token: 'here_goes_your_token'
          }
        })`
      )
    }
  }
}

module.exports.run = (cfg) => {
  const config = new Config(cfg)

  bot.login(config)
}
