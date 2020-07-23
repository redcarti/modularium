const { Message } = require('discord.js')
const { EventEmitter } = require('events')

class RopeError extends Error {
    constructor(message) {
        super(message)
        this.name = 'RopeError'
    }
}

class RopeModule extends EventEmitter {
    /**
     * Callback used by myFunction.
     * @callback plugin
     * @param {pluginGlobal} plugin
     * @param {object} config
     * @returns {void}
     */

    /**
     * RopeModule
     * @param {plugin} plugin
     */
    constructor(plugin) {
        super()
        this.plugin = plugin
    }
}

class RopePlugin {
    constructor() {
        return this
    }
}

module.exports = {
    RopeModule,
    RopeError,
    RopePlugin
}
