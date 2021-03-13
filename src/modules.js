const fs = require('fs')
const path = require('path')
const moment = require('moment')
const requireAll = require('require-all')
const { FoxBetaDispatcher } = require('modularium.fox')
const { RopePlugin } = require('./lib/Rope')
const { Collection } = require('discord.js')
require('colors-cli/toxic')

const recursive_require = directory => {
  let getFiles = (obj, dir) => {
    fs.readdirSync(dir).forEach(file => {
      if (fs.statSync(path.join(dir, file)).isDirectory()){
        obj[file] = {}
        getFiles(obj[file], path.join(dir, file))
      } else if (/\.js$/.test(file)) {
        file = path.basename(file, '.js')
        obj[file] = require(path.join(dir, file))
      }
    })
  }
  let object = {}

  getFiles(object, directory)

  return object
}

module.exports = (bot, config) => {
  const plugin = new RopePlugin()

  plugin.list = {
    internal: new Collection(),
    external: new Collection()
  }

  plugin.bot = bot

  plugin.commands = new FoxBetaDispatcher()

  // Log functions
  plugin.log = (message, prefix) => {
    message = `[${moment().format('HH:mm:ss')}${(prefix ? ' | ' + prefix : '')}]: ${message}`
    console.log(message)
  }

  plugin.info = (message) => {
    plugin.log(message, 'INFO'.x2)
  }

  plugin.err = (message) => {
    plugin.log(message, 'ERR'.x196)
  }

  plugin.warn = (message) => {
    plugin.log(message, 'WARN'.x220)
  }

  plugin.pluginInfo = (message) => {
    plugin.log(message, 'PLUGINS'.x38)
  }

  plugin.designInfo = (message) => {
    plugin.log(message, 'DESIGNS'.x76)
  }

  plugin.updateInfo = (message) => {
    plugin.log(message, 'UPDATE'.x41)
  }

  plugin.foxLog = (message) => {
    plugin.log(message, 'FOX'.x208)
  }

  // Load internal plugins
  try {
    Object.entries(recursive_require(`${__dirname}/modules`)).forEach(([name, pl]) => {
      if (typeof pl === 'function' || typeof pl.plugin === 'function') {
        plugin.list.internal.set(name, {
          name,
          plugin: pl || pl.plugin,
          enabled: true
        })
      } else {
        if (config.features.mbErrors) plugin.pluginInfo('Ошибка, внутренний плагин \'' + name + '\' не функция. [MB#0001-IN]')
      }
    })

    plugin.list.internal.forEach((pl) => {
      pl.plugin(plugin, config)
    })
  } catch (err) {
    console.error(err)
  }

  return plugin
}
