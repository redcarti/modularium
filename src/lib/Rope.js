const { EventEmitter } = require('events')
const { Collection } = require('discord.js')
const { FoxDispatcher } = require('modularium.fox')
const moment = require('moment')

class RopeError extends Error {
  constructor (message) {
    super(message)
    this.name = 'RopeError'
  }
}

class RopeModule extends EventEmitter {
  /**
     * Callback used by myFunction.
     * @callback plugin
     * @param {RopePlugin} plugin
     * @param {object} config
     * @returns {void}
     */

  /**
     * RopeModule
     * @param {plugin} plugin
     */
  constructor (plugin) {
    super()
    this.plugin = plugin
  }
}

class RopePlugin {
  constructor (bot) {
    Object.defineProperty(this, 'bot', {
      get: () => bot,
      set: () => {
        this.err('Bot property cannot be changed!')
      }
    })

    this.list = {
      internal: new Collection(),
      external: new Collection()
    }

    this.commands = new FoxDispatcher()

    this.log = (message, prefix) => {
      const prefixes = [moment().format('HH:mm:ss'), prefix].filter(Boolean)
      console.log(`[${prefixes.join(' | ')}]:`, message)
    }

    this.info = (message) => this.log(message, 'INFO'.x2)

    this.err = (message) => this.log(message, 'ERR'.x196)

    this.warn = (message) => this.log(message, 'WARN'.x220)

    this.pluginInfo = (message) => this.log(message, 'PLUGINS'.x38)

    this.designInfo = (message) => this.log(message, 'DESIGNS'.x76)

    this.updateInfo = (message) => this.log(message, 'UPDATE'.x41)

    this.foxLog = (message) => this.log(message, 'FOX'.x208)
  }
}

module.exports = {
  RopeModule,
  RopeError,
  RopePlugin
}
